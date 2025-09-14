import { navCSS } from "../css-constants/nav";

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
            <a href="">Home</a>
          </li>
          <li className={navCSS.li}>
            <a href="">Stack</a>
          </li>
          <li className={navCSS.li}>
            <a href="">Projects</a>
          </li>
          <li className={navCSS.li}>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className={navCSS.wd}>W/D</div>
    </nav>
  );
}

export default Nav;
