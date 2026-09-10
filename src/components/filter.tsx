import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import data from "../assets/data/data.json";

type FilterProps = {
    region: string;
    onRegionChange: (value: string) => void;
}

export function Filter({ region, onRegionChange }: FilterProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const regions =[...new Set(data.map(country => country.region).sort((a, b) => a.localeCompare(b)))];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleSelect(value: string) {
        onRegionChange(value);
        setIsOpen(false);
    }

    return (
        <div ref={dropdownRef} className="relative w-full max-w-50">
            <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                className="flex h-12 w-full items-center justify-between rounded-md bg-white px-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:bg-blue-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
                <span className="text-sm">{region || "Filter by Region"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="currentColor" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-[calc(100%+8px)] z-50 w-full rounded-md bg-white py-2 shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:bg-blue-900 dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                    >
                        {regions.map(item => {
                            const isActive = region === item;

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => handleSelect(item)}
                                    className="block w-full px-6 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-blue-950 disabled:bg-gray-100 dark:disabled:bg-blue-950"
                                    disabled={isActive}
                                >
                                    {item}
                                </button>
                            )}
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
