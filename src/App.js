
import { Container } from '@material-ui/core';
import {
  BrowserRouter ,
  Route,
  Routes,
  
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import SearchCars from './pages/SearchCars';
import TrendingCars from './pages/TrendingCars';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="App">
          <Container>
            <Routes>
              <Route path="/" element={<TrendingCars />} exact />
              <Route path="/searchcar" element={<SearchCars />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
