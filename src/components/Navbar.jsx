import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext.jsx';

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${active ? 'py-4 backdrop-blur-lg shadow-md' : 'py-7'}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-3xl font-bold">
            Fernando Putra
          </h1>
        </div>

        {/* Menu Tengah */}
        <ul className="hidden md:flex items-center gap-10">
          <li><a href="#home" className="sm:text-lg text-base font-medium transition-colors">Home</a></li>
          <li><a href="#about" className="sm:text-lg text-base font-medium transition-colors">About</a></li>
          <li><a href="#experience" className="sm:text-lg text-base font-medium transition-colors">Experience</a></li>
          {/* <li><a href="#contact" className="sm:text-lg text-base font-medium transition-colors">Contact</a></li>
          <li><a href="#contact" className="sm:text-lg text-base font-medium transition-colors">Contact</a></li> */}
        </ul>

        {/* Aksi Kanan */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none focus:ring-2">
            {theme === 'light' ? (
              // Moon Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            ) : (
              // Sun Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v2"/><path d="M12 21v2"/><path d="m4.22 4.22 1.42 1.42"/><path d="m18.36 18.36 1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="m4.22 19.78 1.42-1.42"/><path d="m18.36 5.64 1.42-1.42"/><circle cx="12" cy="12" r="5"/></svg>
            )}
          </button>
          <a href="https://www.instagram.com/thisnando_/" className="icon-button hidden sm:block font-semibold  p-3 px-6 rounded-full hover:opacity-90 transition-opacity">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
