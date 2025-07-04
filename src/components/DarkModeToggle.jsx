import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 border rounded">
      {isDark ? '☀️ 라이트모드' : '🌙 다크모드'}
    </button>
  );
};

export default DarkModeToggle;
