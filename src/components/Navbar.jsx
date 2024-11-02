import {IoIosHome} from "react-icons/io";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
//import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className = "mb-20 flex items-center justify-between py-6">
        <div className = "flex flex-shrink-0 items-center">
            <IoIosHome className = "mx-2 w-10 h-10"/>
        </div>
        <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/alexander-chow-2167ab249/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
        </a>
        <a href="https://github.com/alexbchow" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
        </a>
        <a href="https://www.instagram.com/alexbchow/" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
        </a>
        
        </div>
        
    </nav>
  )
}

export default Navbar