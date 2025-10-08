import { createContext, useState, useEffect } from 'react';

// Membuat context baru
export const ThemeContext = createContext();

// Membuat provider component
export const ThemeProvider = ({ children }) => {
  // State untuk menyimpan tema, mengambil dari localStorage atau default ke 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Hapus tema lama dan tambahkan tema baru ke elemen <html>
    root.classList.remove(oldTheme);
    root.classList.add(theme);

    // Simpan tema pilihan pengguna di localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fungsi untuk mengubah tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
