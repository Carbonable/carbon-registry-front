import Menu from "./Menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-4 border-b border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="flex justify-start items-center md:p-4">
        <div className="md:text-2xl font-bold uppercase w-1/3">
          Carbon registry
        </div>
        <nav className="w-2/3">
          <Menu />
        </nav>
      </div>
    </header>
  )
}