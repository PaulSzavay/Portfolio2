import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;
