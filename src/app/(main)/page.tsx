import MessageSection from './_components/MessageSection';
import KeywordSection from './_components/KeywordSection';
import DynamicSectionRender from './_components/DynamicSectionRender';

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
