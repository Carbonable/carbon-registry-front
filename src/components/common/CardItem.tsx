export default function CardItem({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border border-opacityLight-10 bg-opacityLight-5 px-4 py-3 flex items-center justify-start hover:bg-opacityLight-10 hover:scale-[1.01] transition-all duration-300 cursor-pointer">{children}</div>;
}