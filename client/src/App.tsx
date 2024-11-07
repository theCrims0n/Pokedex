import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './input.css';
import Home from './pages/Home';
import { Pokemon } from './pages/pokemon/[pokemon]/page';

const App = () => {

  return (
    <html lang="en">
      <body >
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:nombre' element={<Pokemon />} />
          </Routes>
        </Router>
      </body>
    </html>
  );
}

export default App;
