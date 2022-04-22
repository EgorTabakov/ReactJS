import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Chat} from "./screens/Chat/Chat"
import {ChatList} from "./components/ChatList/ChatList";
import {Profile} from "./screens/Profile/Profile";
import {Home} from "./screens/Home/Home";
import {Articles} from "./screens/Articles/Articles";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {useEffect, useState} from "react";
import {PublicRoute} from "./components/PrivateRoute/PublicRoute";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./services/firebase";

function App() {

    const [authed, setAuthed] = useState(false);

    const handleLogin = () => {
        setAuthed(true);
    };

    const handleLogout = () => {
        setAuthed(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, (user) => {
          if(user) {
              handleLogin()
          }  else {
              handleLogout();
          }
        });
        return unsubscribe;
    }, []);

    return (

        <BrowserRouter>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/chat"
                             style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Chat</NavLink>
                </li>
                <li>
                    <NavLink to="/profile"
                             style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/articles"
                             style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Articles</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<PublicRoute authed={authed}/>}>
                <Route path="" element={<Home onAuth={handleLogin}/>}/>
                <Route path="signup" element={<Home onAuth={handleLogin} isSignUp/>}/>
                </Route>
                <Route path="chat/" element={< ChatList/>}>
                    <Route path=":id" element={<Chat/>}/>
                </Route>


                <Route path="profile/" element={<PrivateRoute authed={authed}/>}>
                    <Route path="" element={<Profile onLogout={handleLogout}/>} />
                </Route>

                <Route path="articles/" element={<Articles/>}/>
                <Route path="*" element={<h4>404</h4>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
