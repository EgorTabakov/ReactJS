import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Provider} from "react-redux";
import {Chat} from "./screens/Chat/Chat"
import {ChatList} from "./components/ChatList/ChatList";
import {Profile} from "./screens/Profile/Profile";
import {store} from "./store";


const Home = () => <h4>Home page</h4>;


function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/chat" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Chat</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Profile</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="chat/" element={< ChatList />}>
                    <Route path=":id" element={<Chat/>}/>
                </Route>
                <Route path="profile/" element={<Profile/>}/>
                <Route path="*" element={<h4>404</h4>}/>
            </Routes>
        </BrowserRouter>
        </Provider>
    )
}

export default App;
