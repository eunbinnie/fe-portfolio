import Image from 'next/image';

const MY_INFO = [
  {
    src: '/icons/email.svg',
    label: 'EMAIL',
    info: 'dmsqlsdl54@gmail.com',
  },
  {
    src: '/icons/calendar.svg',
    label: 'BIRTH',
    info: '1999. 05. 04',
  },
  {
    src: '/icons/location.svg',
    label: 'LOCATION',
    info: '경기도 수원시',
  },
];

const InfoItem = () => {
  return (
    <>
      {MY_INFO.map((data, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="gradient-box relative size-10 basis-10 rounded-xl bg-left-top-gradient sm:size-12 sm:basis-12">
            <Image
              src={data.src}
              alt={data.label}
              fill
              className="object-contain px-3 sm:px-4"
            />
          </div>
          <div className="grid flex-1 gap-[2px]">
            <span className="text-xs text-silver">{data.label}</span>
            <span className="truncate text-sm text-gray-50">{data.info}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoItem;
