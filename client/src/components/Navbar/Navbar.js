import React , { useState , useEffect } from 'react'
import { Link , useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import "./Navbar.scss";
import { logout } from '../../redux/auth/action'

const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();

  const Logout = () => {
    dispatch(logout());
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location ]);

  return (
    <div style={user?.result.name ? {justifyContent: 'space-between' } : {justifyContent: 'center'}} className="navbar">
      <> {user?.result.name ? (<h4 className='user'> Welcome {user?.result.name} </h4>)  : (<div></div>)} </>
      {user?.result ? (
        <div>
          {/* {user?.result.imageUrl ? (<img className='img-user' alt={user?.result.name} src={user?.result.imageUrl}/>) : ''} */}
          <button className='logout' onClick={Logout} > Logout </button>
        </div>
        ) : (
          <div>
            <Link to='/auth'> <button className='sign-in' >Sign In</button> </Link>
          </div>
        )}
    </div>
  )
}

export default Navbar