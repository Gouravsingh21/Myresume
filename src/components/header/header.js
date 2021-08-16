import {Link} from 'react-router-dom';
function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand p-1" style={{backgroundColor: "#8A2BE2"}}>
        <Link className="navbar-brand mx-3" to="/Myresume">
          <i className="fa fa-home mx-1"></i>
            HOME
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/contact">
              <i className="fa fa-address-book mx-1"></i>
              CONTACT ME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
