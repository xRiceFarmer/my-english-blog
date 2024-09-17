import { Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar.component";
import Hero from "./components/hero.component";
import BlogsColumn from "./components/blogs-column.component";
import UserAuthForm from "./components/userAuthForm.page";
const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/login" element={<UserAuthForm/>}/>
        <Route path="/blogs" element={<BlogsColumn/>}/>
      </Routes>
    </div>
  )
}
export default App;