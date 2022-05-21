import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import './index.css'



function App() {
  return (
    <BrowserRouter>
      <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes >  
          </Container>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
