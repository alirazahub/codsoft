import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import JobDetail from './Components/JobDetail';
import Companies from './Pages/Companies';
import CompanyDetail from './Components/CompanyDetail';
import Jobs from './Pages/Jobs';
import PostJob from './Pages/PostJob';
import Contact from './Pages/Contact';
import RegisterCompany from './Pages/RegisterCompany';
import CompanyProfile from './Components/CompanyProfile';
import CompanyJobs from './Pages/CompanyJobs';
import Candidates from './Pages/Candidates';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-details" element={<JobDetail />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/company-detail" element={<CompanyDetail />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/company-profile" element={<CompanyProfile />} /> 
        <Route path="/company-candidates" element={<Candidates />} /> 

        <Route path="/company-jobs" element={<CompanyJobs />} /> 
        <Route path="/user-profile" element={<PostJob />} /> 
        <Route path="/user-jobs" element={<PostJob />} /> 

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
