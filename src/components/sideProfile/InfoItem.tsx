import Image from 'next/image';

interface MyInfoProps {
  src: string;
  label: string;
  info: string;
}

const InfoItem = ({ src, label, info }: MyInfoProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-left-top-gradient gradient-box relative size-12 basis-12 rounded-xl">
        <Image src={src} alt={label} fill className="object-contain px-4" />
      </div>
      <div className="grid flex-1 gap-[2px]">
        <span className="text-xs text-silver">{label}</span>
        <span className="text-gray-50 truncate text-sm">{info}</span>
      </div>
    </div>
  );
};

export default InfoItem;
