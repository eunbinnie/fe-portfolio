import MessageSection from './_components/MessageSection';
import KeywordSection from './_components/KeywordSection';
import ResumeSection from './_components/ResumeSection';

export default function MainPage() {
  return (
    <>
      <MessageSection message="start" />
      <KeywordSection />
      <ResumeSection />
      <MessageSection message="end" />
    </>
  );
}
