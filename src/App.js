import MainContent from './MainContent';
import Header from './Header';
import Footer from './Footer';




function App(){
  return (
      <div>
          <Header />
          <div className='body'>
            <MainContent />
            <Footer/>
          </div>
          
      </div>
  )
}

export default App;
