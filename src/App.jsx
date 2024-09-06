import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CSR from './components/CSR'
import HowWeWork from './components/HowWeWork'
import MeetTheTeam from './components/MeetTheTeam'
import NewsCentre from './components/NewsCentre'
import OurPartnerships from './components/OurPartnerships'
import SchbangNetwork from './components/SchbangNetwork'
import Home from './components/Home'
import CaseStudy from './components/CaseStudy'


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/csr' element={<CSR/>}></Route>
        <Route path='/howwework' element={<HowWeWork/>}></Route>
        <Route path='/meettheteam' element={<MeetTheTeam/>}></Route>
        <Route path='/newscentre' element={<NewsCentre/>}></Route>
        <Route path='/ourpartnership' element={<OurPartnerships/>}></Route>
        <Route path='/schbangnetwork' element={<SchbangNetwork/>}></Route>
        <Route path='/casestudy' element={<CaseStudy/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
