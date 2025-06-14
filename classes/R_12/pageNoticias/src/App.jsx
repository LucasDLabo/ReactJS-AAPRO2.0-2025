import NewsCard from './components/NewsCard/NewsCard.jsx';
import './App.css';
import newsData from './components/NewsCard/NewsData.js'
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      console.warn('Dark theme selected');
    } else {
      document.documentElement.classList.remove('dark');
      console.warn('Light theme selected');
    }
  };

  return (
    <>
      <button className='toggleTheme' title={`Switch to ${theme === "dark" ? "light theme" : "dark theme"} `} onClick={toggleTheme}>{theme === "dark" ? "🌞" : "🌑"}</button>
      {newsData.map( (news)=>(

        <NewsCard key={news.id} title={news.title} description={news.description} source={news.source} imgURL={news.imgURL} />

      ) )}
    </>
  )
}

export default App
