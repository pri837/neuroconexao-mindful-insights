import { Moon, Sun } from 'lucide-react';

function Header() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <header>
            <nav>
                <button onClick={toggleDarkMode} className="transition-colors duration-300 ease-in-out">
                    {isDarkMode ? <Sun /> : <Moon />}  
                </button>
                {/* Other navigation items */}
                <NewsletterButton />
            </nav>
        </header>
    );
}

export default Header;