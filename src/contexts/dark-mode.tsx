import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

type DarkModeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
    undefined,
);

type DarkModeProviderProps = {
    children: ReactNode;
};

export function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;

        return storedTheme ?? "system";
    });

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        function updateTheme() {
            const shouldUseDark =
                theme === "dark" ||
                (theme === "system" && mediaQuery.matches);

            document.documentElement.classList.toggle("dark", shouldUseDark);

            setIsDark(shouldUseDark);
        }

        if (theme === "system") {
            localStorage.removeItem("theme");
        } else {
            localStorage.setItem("theme", theme);
        }

        updateTheme();

        mediaQuery.addEventListener("change", updateTheme);

        return () => {
            mediaQuery.removeEventListener("change", updateTheme);
        };
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme, setTheme, isDark }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error(
            "useDarkMode deve ser usado dentro de DarkModeProvider",
        );
    }

    return context;
}
