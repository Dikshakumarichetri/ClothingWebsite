import logo from './logo.svg';
import './App.css';
import WomenCard from './components/card/womencard';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MenCard from './components/card/men';
import CollapsibleExample from './components/Navbar';
import Footer from './components/footer';
import ContactForm from './components/contact';


function App() {
  return (


    <><Router>
      <CollapsibleExample />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/womencard' element={<WomenCard />} />
        <Route path='/mencard' element={<MenCard />} />
        <Route path='/contact' element={<ContactForm />} />

      </Routes>

      {/* <Home /><WomenCard /> */}
      <Footer />
    </Router></>



    // <Route exact path="/" element={<Home />} />


    // <Route exact path="/womencard" element={<WomenCard />} />


    // <Route exact path="/mencard" element={<MenCard />} />




  );
}

export default App;
