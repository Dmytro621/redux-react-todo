import {Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './pages/footer'
import ToDo from './pages/todo'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ToDo/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
