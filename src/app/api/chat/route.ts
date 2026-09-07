// AI 채팅 비활성화 — 되살릴 때 아래 주석을 해제하세요.
// 함께 되살릴 것: src/app/layout.tsx 의 FloatingButton
// 필요한 환경 변수: OPENAI_API_KEY, MY_AI_DATA

// import OpenAI from 'openai';
// import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
//
// /** 요청당 전달받는 최대 대화 개수 (system 프롬프트 제외) */
// const MAX_HISTORY_LENGTH = 12;
// /** 메시지 하나의 최대 길이 */
// const MAX_CONTENT_LENGTH = 1000;
//
// let openai: OpenAI | null = null;
//
// /**
//  * OpenAI 클라이언트를 최초 요청 시점에 생성합니다.
//  * 모듈 로드 시점에 생성하면 빌드 단계에서 API 키가 없을 때 빌드가 실패합니다.
//  */
// const getOpenAI = () => {
//   const apiKey = process.env.OPENAI_API_KEY;
//
//   if (!apiKey) {
//     throw new Error('OPENAI_API_KEY 환경 변수가 설정되지 않았습니다.');
//   }
//
//   if (!openai) {
//     openai = new OpenAI({ apiKey });
//   }
//
//   return openai;
// };
//
// interface ChatMessage {
//   role: 'user' | 'assistant';
//   content: string;
// }
//
// const isChatMessage = (item: unknown): item is ChatMessage => {
//   if (typeof item !== 'object' || item === null) {
//     return false;
//   }
//
//   const { role, content } = item as Record<string, unknown>;
//
//   return (
//     (role === 'user' || role === 'assistant') &&
//     typeof content === 'string' &&
//     content.trim() !== ''
//   );
// };
//
// /**
//  * 공개 엔드포인트이므로 전달받은 대화 내역을 검증하고 길이를 제한합니다.
//  */
// const parseMessages = (value: unknown): ChatMessage[] => {
//   if (!Array.isArray(value)) {
//     return [];
//   }
//
//   return value
//     .filter(isChatMessage)
//     .slice(-MAX_HISTORY_LENGTH)
//     .map(({ role, content }) => ({
//       role,
//       content: content.slice(0, MAX_CONTENT_LENGTH),
//     }));
// };
//
// export async function POST(req: Request) {
//   const { messages } = await req.json();
//   const history = parseMessages(messages);
//
//   if (history.length === 0) {
//     return Response.json(
//       { error: '전달된 대화 내역이 없습니다.' },
//       { status: 400 },
//     );
//   }
//
//   const chatMessages: ChatCompletionMessageParam[] = [
//     {
//       role: 'system',
//       content: process.env.MY_AI_DATA as string,
//     },
//     ...history,
//   ];
//
//   try {
//     const response = await getOpenAI().chat.completions.create({
//       messages: chatMessages,
//       model: 'gpt-4o',
//       max_completion_tokens: 300,
//     });
//
//     return Response.json(response);
//   } catch (error) {
//     // 응답 본문이 비어 있으면 원인을 알 수 없으므로 상태 코드와 메시지를 함께 반환합니다.
//     const status = error instanceof OpenAI.APIError ? error.status : 500;
//     const message =
//       error instanceof Error ? error.message : '알 수 없는 오류입니다.';
//
//     console.error('OpenAI 요청 실패:', status, message);
//
//     return Response.json({ error: message }, { status: status ?? 500 });
//   }
// }
