import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API 라우트: 요약 기능
  app.post("/api/summarize", async (req, res) => {
    try {
      const { projectText } = req.body;
      
      if (!projectText) {
        return res.status(400).json({ error: "projectText is required" });
      }

      const apiKey = process.env.KAKAO_REST_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "KAKAO_REST_API_KEY is missing" });
      }

      // 카카오 KoGPT에게 내릴 프롬프트 (PM 성과 요약용으로 튜닝)
      const prompt = `다음은 IT 교육 PM의 프로젝트 경험입니다. 이 내용을 바탕으로 핵심 성과를 면접관이 보기 좋게 3줄로 요약해주세요.\n\n내용: ${projectText}\n\n3줄 요약:`;

      const response = await fetch('https://api.kakaobrain.com/v1/inference/kogpt/generation', {
        method: 'POST',
        headers: {
          'Authorization': `KakaoAK ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 150,
          temperature: 0.5,
          top_p: 0.9,
        }),
      });

      const data = await response.json();
      
      if (data.generations && data.generations.length > 0) {
        res.status(200).json({ summary: data.generations[0].text });
      } else {
        res.status(500).json({ error: "Failed to generate summary from Kakao API" });
      }
    } catch (error) {
      console.error("Summarize API Error:", error);
      res.status(500).json({ error: "요약 중 에러가 발생했습니다." });
    }
  });

  // Vite 미들웨어 설정 (개발 환경용)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
