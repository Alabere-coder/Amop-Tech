import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Coder Blog</h1>
            <div className="links">
                <Link to="/homepage">Home</Link>
                <Link to="/blogs/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;