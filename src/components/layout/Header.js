import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/context';
import { logout } from '../auth/service';
import './Header.css';
import { ReactComponent as ReactLogo } from '../../assets/logo-wallapop.svg';

const Header = (...rest) => {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    if (window.confirm('¿Quiere cerrar sesión?')) {
      await logout();
      onLogout();
    }
  };
  return (
    <header className='header'>
      <nav className='navbar'>
        <span>
          <ReactLogo />
          <h1>Nodepop</h1>
        </span>
        <span className='nav-links'>
          <NavLink to='/adverts'> Listado de anuncios</NavLink>
          <NavLink to='/adverts/new'> Nuevo anuncio</NavLink>
          {isLogged ? (
            <button onClick={handleLogoutClick} className='header-button'>
              Logout
            </button>
          ) : (
            <button
              as={Link}
              variant='primary'
              className='header-button'
              to='/login'
            >
              Login
            </button>
          )}
        </span>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
