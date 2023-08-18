import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import JobDetail from './Components/JobDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-details" element={<JobDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
