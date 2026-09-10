import { ThemeSwitch } from "./theme-switch";

export function Header() {
    return (
        <header className="sticky top-0 w-full z-10 py-4 bg-white dark:bg-blue-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none">
            <div className="container flex items-center justify-between gap-4">
                <h1 className="text-base md:text-2xl font-extrabold">Where in the world?</h1>

                <ThemeSwitch />
            </div>
        </header>
    )
}
