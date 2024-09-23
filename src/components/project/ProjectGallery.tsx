/* eslint-disable @next/next/no-img-element */
import Masonry from 'react-masonry-css';

const ProjectGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="grid gap-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Website Previews</h2>
      </div>
      <Masonry
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        columnClassName="grid gap-10"
      >
        {images.map((image, idx) => (
          <img key={idx} src={image} alt="사이트 미리보기" />
        ))}
      </Masonry>
    </div>
  );
};

export default ProjectGallery;
