import cn from '@/utils/cn';

interface IDrawerProps {
  active: boolean;
  children: React.ReactNode;
}

const Drawer = ({ active, children }: IDrawerProps) => {
  return (
    <div
      className={cn(
        'fixed inset-y-0 right-0 bg-white p-4',
        active ? 'animate-slide-in-right' : 'animate-slide-out-right',
      )}
    >
      {children}
    </div>
  );
};

export default Drawer;
