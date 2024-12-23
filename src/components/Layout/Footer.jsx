import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; 2024 Parking System | All Rights Reserved</p>
                <div className="mt-4">
                    <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#terms" className="hover:text-gray-400"> Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
