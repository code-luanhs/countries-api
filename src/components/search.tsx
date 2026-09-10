type SearchProps = {
    search: string;
    onSearchChange: (value: string) => void;
}

export function Search({ search, onSearchChange }: SearchProps) {
    return (
        <div className="w-full max-w-120 relative">
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for a country..."
                value={search}
                onChange={event => onSearchChange(event.target.value)}
                className="h-12 pl-16 pr-8 w-full bg-white dark:bg-blue-900 outline-none text-sm placeholder:text-grey-400 dark:placeholder:text-white rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 absolute left-6 top-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
        </div>
    )
}
