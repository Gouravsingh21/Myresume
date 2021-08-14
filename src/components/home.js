import Header from './header/header';
import Jumbotron from './header/jumbotron';
import Content from './content/content';
import Footer from './content/footer';



function Home() {
  return (
      <div>
        <Header/>
        <Jumbotron/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default Home;
