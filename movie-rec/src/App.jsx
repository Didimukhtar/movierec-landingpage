import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Genres from './components/Genres';
import Footer from './components/Footer';



export default function App(){
    return (
      <>
      <div>
        <Header />
        <Hero />
        <Features />
        <Genres />
        <Footer />
      </div>
      </>
    )
}
