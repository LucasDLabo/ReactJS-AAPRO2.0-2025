import NewsCard from './components/NewsCard/NewsCard.jsx';
import './App.css';
import newsData from './components/NewsCard/NewsData.js'

function App() {
  return (
    <>
      {newsData.map( (news)=>(

        <NewsCard key={news.id} title={news.title} description={news.description} source={news.source} imgURL={news.imgURL} />

      ) )}
    </>
  )
}

export default App
