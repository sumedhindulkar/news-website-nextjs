import NavbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <div className="container gx-0">
        <div className={NavbarStyles.navbar}>
          <div className="d-flex justify-content-around align-items-center h-100">
            <ul className="d-flex justify-content-evenly w-50 align-items-center h-100 ">
              <li className={NavbarStyles.active}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Beauty</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Trending</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
            </ul>
            <div>
              <input
                type="text"
                className={NavbarStyles.search}
                placeholder="Search "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
