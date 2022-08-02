import React , {useState} from 'react'
import "./Sidebar.scss";

const Sidebar = () => {
  const [active, setactive] = useState(false);

  const isActive = active ? 'is-active' : '';

  return (
      <div className={`${isActive} , navigation `}>
        <ul>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney brand"></i></span>
              <span className='title'>Mishavian</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Customers</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Messages</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Help</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Setting</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Password</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='icon'><i className="fa-solid fa-house-chimney"></i></span>
              <span className='title'>Sign Out</span>
            </a>
          </li>
        </ul>
        <div onClick={() => setactive(!active)} className='toggle'></div>
      </div>
  )
}

export default Sidebar