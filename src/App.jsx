import {Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./pages/header";
import NotFound from "./pages/notFound";
import Swapi from "./pages/swapi";
import Footer from './pages/footer'
import ToDo from './pages/todo'



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ToDo />} />
        <Route path="/swapi" element={<Swapi />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
