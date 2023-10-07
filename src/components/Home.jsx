import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import { signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';
const Homepage = () => {
  const [value, setValue] = useState();
/////backend is connected
  const navigate = useNavigate();

  const handleJoin = useCallback(() => {
    if (value === undefined) {
      alert("please enter room code");
    } else {
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);
  // const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

  return (
    <div className="container  flex justify-center items-center bg-slate-900 h-screen w-full">
     
        <div className="room_name bg-white w-87 h-69  rounded-2xl shadow-2xl">
        <div className="p-7">
          <h3 className="text-black text-center py-7 text-3xl font-bold">Welcome to Zexo</h3>
          <div
            className="room flex-column 
         px-5"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Enter room code"
              required className="border-slate-800 h-10 rounded-2xl p-2"
            />
            <br />
            <div className="flex justify-center">
            <button
              onClick={handleJoin}
              className="btn btn-primary position-relative text-wrap px-2 my-3 "
            >
              start calling
            </button>
            
	{/* <button onClick={handleLogout}>
                        Logout
                    </button> */}
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
