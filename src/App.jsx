import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import DeptPage from './pages/DeptPage/DeptPage'
import EventPage from './pages/EventsPage/EventsPage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import CEOPage from './pages/AboutPage/CEOPage/CEOPage'
import FooterComponent from './components/FooterComponent/FooterComponent'

function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>  
          {/* <Route path='/about/ceo' element={<CEOPage/>}></Route> */}
          <Route path='/department' element={<DeptPage/>}></Route>
          <Route path='/events' element={<EventPage/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
