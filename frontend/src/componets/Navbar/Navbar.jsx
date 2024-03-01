import { Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";

// Inside your component



const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>chat boom</h1>
            </div>
            <div className="leave-room-button">
            <button onClick={() => navigate('/')}>Leave Room</button>             
             </div>
        </nav>
    );
};

export default Navbar;