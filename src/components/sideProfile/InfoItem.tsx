import Image from 'next/image';

interface MyInfoProps {
  src: string;
  label: string;
  info: string;
}

const InfoItem = ({ src, label, info }: MyInfoProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="gradient-box relative size-12 basis-12 rounded-xl bg-left-top-gradient">
        <Image src={src} alt={label} fill className="object-contain px-4" />
      </div>
      <div className="grid flex-1 gap-[2px]">
        <span className="text-xs text-silver">{label}</span>
        <span className="truncate text-sm text-gray-50">{info}</span>
      </div>
    </div>
  );
};

export default InfoItem;
