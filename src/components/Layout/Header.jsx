import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const logOut = async () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully.");
                localStorage.clear();
                navigate("/login");
            })
            .catch((error) => {
                console.error("An error occurred during sign-out:", error);
            });
    };

    return (
        <header className="bg-blue-600 p-4 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">Parking System</div>
                <nav className="space-x-6 flex items-center">
                    <Link to="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link to="/exit-vehicle" className="hover:text-gray-300">
                        Exit Vehicle
                    </Link>
                    <Link to="/login" className="hover:text-gray-300">
                        Login/Signup
                    </Link>
                    <button
                        className="hover:text-gray-300 bg-transparent border-none cursor-pointer"
                        onClick={logOut}
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
