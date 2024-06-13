import Menu from "./Menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-4 border-b border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="flex justify-start items-center p-4">
        <div className="text-2xl font-bold uppercase">
          Carbon registry
        </div>
        <nav className="ml-24">
          <Menu />
        </nav>
      </div>
    </header>
  )
}