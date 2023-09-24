import { Route, Routes } from "react-router";
import Error from './components/Error';
import { default as Home1, default as Homepage } from "./components/Home1";
import RoomPage from "./components/Room";
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";



function App() {
  return (
    <div >
<Routes>
  <Route path="/" element={<Homepage/>}/>

  <Route path="/Room/:RoomId" element={<RoomPage/>}/>

  <Route path="/Error" element={<Error/>}/>

  <Route path="/Home1" element={<Home1/>}/>

  <Route path="/SignIn" element={<SignIn/>}/>

  <Route path="/SignUp" element={<SignUp/>}/>
</Routes>

    </div>
  
  );
}

export default App;
