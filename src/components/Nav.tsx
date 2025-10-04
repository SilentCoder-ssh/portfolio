import { Link } from "@tanstack/react-router";
import { navCSS } from "../styles/css-constants/nav";

function Nav() {
  return (
    <nav className={navCSS.container}>
      <div className={navCSS.logo}>
        <video
          src="/video/logo_final.webm"
          className={navCSS.video}
          autoPlay
          loop
          muted
          playsInline //Mobile-friendly
        />
      </div>
      <div className={navCSS.containerUl}>
        <ul className={navCSS.ul}>
          <li className={navCSS.li}>
            <Link to="/home">Home</Link>
          </li>
          <li className={navCSS.li}>
            <Link to="/stack">Stack</Link>
          </li>
          <li className={navCSS.li}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={navCSS.li}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className={navCSS.wd}>W/D</div>
    </nav>
  );
}

export default Nav;
