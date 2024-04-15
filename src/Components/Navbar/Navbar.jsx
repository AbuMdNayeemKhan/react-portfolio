import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center'>
            <img src={logo} alt="Brand Logo" />
            <ul className='flex gap-8'>
                <NavLink to="/"><li><a href="" className='hover:text-[red] duration-300'>Home</a></li></NavLink>
                <NavLink to="/about"><li><a href="" className='hover:text-[red] duration-300'>About Me</a></li></NavLink>
                <NavLink to="/services"><li><a href="" className='hover:text-[red] duration-300'>Services</a></li></NavLink>
                <NavLink to="/portfolio"><li><a href="" className='hover:text-[red] duration-300'>Portfolio</a></li></NavLink>
                <NavLink to="/contact"><li><a href="" className='hover:text-[red] duration-300'>Contact</a></li></NavLink>
            </ul>
            <button className='bg-[red] px-5 py-3 rounded-lg hover:scale-105 duration-300'>Contact With Me</button>
        </div>
    );
};
export default Navbar;