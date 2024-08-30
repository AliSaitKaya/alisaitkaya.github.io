import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => setIsSidebarOpen(true);
  const handleMouseLeave = () => setIsSidebarOpen(false);

  const menuItems = [
    { name: 'Home', shortName: 'H', icon: '#home', path: '/' },
    // { name: 'Dashboard', shortName: 'D', icon: '#speedometer2', path: '/dashboard' },
    { name: 'Orders', shortName: 'O', icon: '#table', path: '/orders' },
    // { name: 'Products', shortName: 'P', icon: '#grid', path: '/products' },
    // { name: 'Customers', shortName: 'C', icon: '#people-circle', path: '/customers' },
  ];

  return (
    <div
      ref={sidebarRef}
      className="d-flex flex-column flex-shrink-0 bg-dark"
      style={{
        width: isSidebarOpen ? '12rem' : '4.5rem',
        height: '100vh',
        transition: 'width 0.3s',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: '#343a40',
        color: 'white',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <Link to={item.path} className="nav-link text-white" aria-label={item.name}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref={item.icon}></use>
              </svg>
              {isSidebarOpen ? item.name : item.shortName}
            </Link>
          </li>
        ))}
      </ul>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 text-white text-decoration-none"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
