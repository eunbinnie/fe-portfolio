import SideProfile from '@/components/sideProfile/SideProfile';

const ResumeSection = () => {
  return (
    <section className="mx-auto my-[60px] flex max-w-[1248px] gap-6 px-6">
      <SideProfile />
      {/* right */}
      <div className="flex-1" />
    </section>
  );
};

export default ResumeSection;
