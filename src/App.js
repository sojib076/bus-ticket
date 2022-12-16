
import './App.css';
import Home from './Components/Home';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-[#F5D2D3] '>
      <Home> </Home>
      <Toaster/>
    </div>
  );
}

export default App;
