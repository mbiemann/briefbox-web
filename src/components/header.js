import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <nav className="navbar border-bottom mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder text-light" to="/">
          Brief Box <span className="text-muted fw-light fs-6">{props.children}</span>
        </Link>
        <button type="button" className="btn btn-dark">Logout</button>
      </div>
    </nav>
  );
}
