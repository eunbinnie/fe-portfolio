import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

export async function POST(req: Request) {
  const { question } = await req.json();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: '너의 이름은 이은빈이야.',
      },
      {
        role: 'user',
        content: question,
      },
    ],
    model: 'gpt-4o-mini',
    max_tokens: 300,
  });
  return new Response(JSON.stringify(response));
}
