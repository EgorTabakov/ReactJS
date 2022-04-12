import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Chat} from "./screens/Chat/Chat"
import {ChatList} from "./components/ChatList/ChatList";
import {Profile} from "./screens/Profile/Profile";
import {Home} from "./screens/Home/Home";

function App() {


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
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="chat/" element={< ChatList />}>
                        <Route path=":id" element={<Chat />}/>
                    </Route>
                    <Route path="profile/" element={<Profile/>}/>
                    <Route path="*" element={<h4>404</h4>}/>
                </Routes>
            </BrowserRouter>

    )
}

export default App;
