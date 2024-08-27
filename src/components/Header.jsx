import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MdSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { user, logout } = useAuth();
  const { theme, ToggleTheme } = useTheme();

  return (
    <div className='sticky z-10 shadow-inner top-0 theme-bg select-none flex justify-between p-3 px-5 md:px-10 font-semibold'>
      <span className='text-xl md:text-2xl font-black flex items-center gap-1'>TODO</span>
      <div className='flex space-x-4 md:space-x-24 items-center'>
        <div onClick={ToggleTheme} className='cursor-pointer p-1 text-xl'>
          {theme === 'dark' ? <MdSunny className='theme-anim' /> : <IoMdMoon className='theme-anim' />}
        </div>
        {user?.isLoggedin ? (
          <div className='flex items-center space-x-4'>
            <span className='text-sm md:text-base cursor-pointer'>@{user.username}</span>
            <span className='theme-bg-i rounded p-2 py-1 cursor-pointer text-sm md:text-base' onClick={logout}>
              Logout
            </span>
          </div>
        ) : (
          <span className='space-x-3 md:space-x-5 text-sm md:text-base'>
            <Link className='hover:underline' to={"/signup"}>Signup</Link>
            <Link className='hover:underline' to={"/login"}>Login</Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
