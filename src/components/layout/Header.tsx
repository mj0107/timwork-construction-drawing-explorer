import logo from '@/assets/timwork-logo.png';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="w-full h-14 bg-surface px-5 flex items-center border-b border-gray-200">
      <img src={logo} alt="Timwork Logo" className="h-12 w-auto" />
      {children}
    </header>
  );
}
