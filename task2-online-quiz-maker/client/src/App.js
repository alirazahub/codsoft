import { useState, useEffect } from 'react';
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
import ShortlistedCandidates from './Pages/ShortlistedCandidates';
import CandidateProfile from './Components/CandidateProfile';
import UserProfile from './Components/UserProfile';
import AppliedJobs from './Pages/AppliedJobs';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { key } from './key';
import FavrouiteJobs from './Pages/FavrouiteJobs';
function App() {
  const [role, setRole] = useState("")
  const [cookies] = useCookies(['x-auth-token']);

  const token = cookies['x-auth-token']

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(`${key}/api/user/verify`, {
          headers: {
            "x-auth-token": cookies['x-auth-token']
          }
        })
        setRole(res.data.role)
      } catch (error) {
        console.log(error)
      }
    }
    verifyUser()
    //eslint-disable-next-line
  }, [token])
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-details" element={<JobDetail />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/post-job" element={<PostJob />} />

        {
          role === "company" &&
          <>
            <Route path="/candidate-profile" element={<CandidateProfile />} />
            <Route path="/company-shortlisted-candidates" element={<ShortlistedCandidates />} />
            <Route path="/company-detail" element={<CompanyDetail />} />
            <Route path="/company-jobs" element={<CompanyJobs />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/company-candidates" element={<Candidates />} />
          </>
        }
        {
          role === "user" && <>
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/applied-jobs" element={<AppliedJobs />} />
            <Route path="/favrouite-jobs" element={<FavrouiteJobs />} />
          </>
        }

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
