import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/context';
import { logout } from '../auth/service';

const Header = (...rest) => {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    if (window.confirm('¿Quiere cerrar sesión?')) {
      await logout();
      onLogout();
    }
  };
  return (
    <header>
      <nav>
        <NavLink to='/adverts'> Listado de anuncios</NavLink>
        <NavLink to='/adverts/new'> Crear advert</NavLink>
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
      </nav>
    </header>
  );
};

export default Header;
