import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Modal from "./components/Modal"


export default function App() {
  return (
    //ERR "JSX expressions must have one parent element" error added <> </>
    <>
    <Navbar/>
    <Hero />
    <Modal />
    </>
  )
}