import "./navbar.css"
function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <span></span>
            <div className="logo">eraf</div>
            <ul className="menu">
                <li><a href="#">about</a></li>
                <li><a href="#">works</a></li>
                <li><a href="#">casting</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <div className="btn">instegram</div>
        </nav>
    </header>
  )
}

export default Navbar