import OpenAI from 'openai';

let openai: OpenAI | null = null;

/**
 * OpenAI 클라이언트를 최초 요청 시점에 생성합니다.
 * 모듈 로드 시점에 생성하면 빌드 단계에서 API 키가 없을 때 빌드가 실패합니다.
 */
const getOpenAI = () => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY 환경 변수가 설정되지 않았습니다.');
  }

  if (!openai) {
    openai = new OpenAI({ apiKey });
  }

  return openai;
};

export async function POST(req: Request) {
  const { question } = await req.json();

  const response = await getOpenAI().chat.completions.create({
    messages: [
      {
        role: 'system',
        content: process.env.MY_AI_DATA as string,
      },
      {
        role: 'user',
        content: question,
      },
    ],
    model: 'gpt-4o',
    max_completion_tokens: 300,
  });
  return new Response(JSON.stringify(response));
}
