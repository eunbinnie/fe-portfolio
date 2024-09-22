import { IWorkDetail } from '@/types/project.types';
import Masonry from 'react-masonry-css';

const WorkDetails = ({ data }: { data: IWorkDetail[] }) => {
  return (
    <div className="grid gap-8">
      <div className="grid gap-1">
        <h5 className="text-2xl font-medium text-white">What I Worked On</h5>
        <h6 className="font-extralight text-white">작업한 내용</h6>
      </div>

      <Masonry
        breakpointCols={{ default: 3, 768: 2, 425: 1 }}
        className="flex gap-6 text-white"
        columnClassName="flex flex-col gap-10"
      >
        {data.map((data, idx) => (
          <div key={idx}>{data.title}</div>
        ))}
      </Masonry>
    </div>
  );
};

export default WorkDetails;
