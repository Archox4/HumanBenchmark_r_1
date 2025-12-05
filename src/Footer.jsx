import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center bg-transparent  mt-10">
            <p>Project inspired mainly by <i className='text-cyan-500'><a href="https://humanbenchmark.com/">HumanBenchmark</a></i></p>
            <a href="https://github.com/archox4" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center gap-2 mt-4'>
                <FaGithub size={24} />
                My GitHub
            </a>
        </footer>
    );
};

export default Footer;
