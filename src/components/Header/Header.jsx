import logo from './logo.svg';
import shape from './shape.svg';
import './header.css';

function Header() {
  return (
      <header className="app-header">
        <div className="logo-container"><img src={logo} className="logo" alt="logo" /></div>
        <div className="shape-container"><img src={shape} className="shape" alt="shape" /></div>
      </header>
  )
}

export default Header;
