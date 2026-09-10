import { Link } from "react-router";

export function NotFoundPage() {
    return (
        <main className="py-10 lg:py-16">
            <div className="container space-y-14 lg:space-y-16">
                <div>
                    <Link to="/" className="h-10 pl-6 px-8 flex items-center gap-2 text-sm rounded-md bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:bg-blue-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="currentColor" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>
                        <span>Back</span>
                    </Link>
                </div>

                <h2 className="text-center text-3xl font-extrabold">Not Found</h2>
            </div>
        </main>
    )
}
