import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import Product from './components/Product'
import Todo from './components/Todo/Todo'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer'
import Loader from './components/Loader/Loader'
import { useSelector } from 'react-redux';
const App = () => {
  let isLoading = useSelector(state => state.loadRed.isLoading);
  return (
    <Router>
      <main className="App min-vh-100">
        <Nav />
        {isLoading && <Loader />}
        <Routes>
          <Route path="/" element={<About/>} exact/>
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} exact />
          <Route path="/shop/:id" element={<Product/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </main>
        <Footer/>
    </Router>
  );
}

export default App;
