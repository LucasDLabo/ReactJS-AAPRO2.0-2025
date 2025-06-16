import NewsCard from './components/cards/NewsCard/NewsCard.jsx';
import CardContainer from './components/cards/CardContainer/CardContainer.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import TitleLastNews from './components/cards/TitleLastNews/TittleLastNews.jsx';
import './App.css';
import newsData from './components/cards/NewsCard/NewsData.js'

function App() {
  return (
    <>
      <Header />
      <main>
        <TitleLastNews />
        <CardContainer>
          {newsData.map( (news)=>(
            <NewsCard 
              key={news.id} 
              title={news.title} 
              description={news.description} 
              source={news.source} 
              imgURL={news.imgURL} 
              imgALT={news.imgALT} 
              date={news.date}
            />
          ) )}
        </CardContainer>
      </main>
      <Footer />
    </>
  )
}

export default App
