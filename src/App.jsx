import { Route, Routes } from "react-router";
import Error from './components/Error';
import Home1 from "./components/Home1";
import RoomPage from "./components/Room";
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";
import Home from "./components/Home"



function App() {
  return (
    <div >
<Routes>
  <Route path="/Home" element={<Home/>}/>
{/*  */}
  <Route path="/Room/:RoomId" element={<RoomPage/>}/>

  <Route path="/Error" element={<Error/>}/>

  <Route path="/" element={<Home1/>}/>

  {/* <Route path="/SignIn" element={<SignIn/>}/>

  <Route path="/SignUp" element={<SignUp/>}/> */}
</Routes>

    </div>
  
  );
}

export default App;
