import { PROJECT_TOTAL_COUNT } from '@/constants/projects';
import { notFound } from 'next/navigation';

const page = ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);

  if (id > PROJECT_TOTAL_COUNT || id === 0) {
    notFound();
  }

  return (
    <div className="max-container pt-6 text-white">{params.id} 상세 페이지</div>
  );
};

export default page;
