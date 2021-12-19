import React, { useState, useRef, useEffect } from 'react'
import { ThemeContext, themes } from './theme-context';
import Toolbar from './components/Toolbar'

export default function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  const count = useRef(0);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    count.current = count.current + 1;
  })

  const [name, setName] = useState('Alex');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: theme.background, color: theme.foreground }}>
        <p>Theme {theme.name}</p>
        <Toolbar changeTheme={toggleTheme} />
        <p>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1>{count.current}</h1>
        </p>
      </div>
    </ThemeContext.Provider>
  );
}