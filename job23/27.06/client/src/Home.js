import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <FontAwesomeIcon icon={faCode} />
            Independent Corporate
          </Link>
        </h1>
        <ul>
          <li><Link to='/register1'>Register</Link></li>
          <li><Link to='/login1'>Login</Link></li>
        </ul>
      </nav>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Independent Corporate</h1>
            <p className='lead'>
              Create a developer profile/portfolio, share posts and get help from other developers
            </p>
            <div className='buttons'>
              <Link to='register1' className='btn btn-primary'>Sign Up</Link>
              <Link to='login1' className='btn btn-primary'>Login</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;