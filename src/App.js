import './App.css';
import Header from './components/header/header';
import MyCarousel from './components/home/carousel';
import About from './components/home/about'; 
import Register from './components/auth/register'; 
//import Login from './login';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyCarousel/>
      <About/>
      <Register/>
    </div>
  );
}

export default App;
