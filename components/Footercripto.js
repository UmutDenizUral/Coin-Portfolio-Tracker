import React from 'react';

const Footercripto = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 m-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold mb-2">UDU Finance</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio ipsum. Nullam aliquet augue non felis.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm">Email: info@udufinance.com</p>
                    <p className="text-sm">Phone: +1234567890</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footercripto;
