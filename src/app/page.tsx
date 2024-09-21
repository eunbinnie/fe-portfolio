import DynamicSectionRender from '@/components/section/DynamicSectionRender';
import KeywordSection from '@/components/section/KeywordSection';
import MessageSection from '@/components/section/MessageSection';

export default function MainPage() {
  return (
    <>
      <MessageSection message="start" />
      <KeywordSection />
      <DynamicSectionRender />
      <MessageSection message="end" />
    </>
  );
}
