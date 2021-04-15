import { useRouter } from "next/router";
import Link from "next/link";
import { INavLinks, NavLinkOptions } from "./config";

interface NavLinksProps {
  handleCloseNav: Function;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleCloseNav }) => {
  const { pathname } = useRouter();

  const isAuthenticated = false;

  return (
    <>
      {NavLinkOptions.map(({ name, path }: INavLinks) => (
        <Link href={path} key={name}>
          <a
            className={`nav-link text-dark ${pathname === path}`}
            onClick={() => handleCloseNav()}>
            {name}
          </a>
        </Link>
      ))}

      {isAuthenticated && (
        <Link href="/dashboard">
          <a
            className={`nav-link text-dark ${pathname === "/dashboard"}`}
            onClick={() => handleCloseNav()}>
            Dashboard
          </a>
        </Link>
      )}
    </>
  );
};

export default NavLinks;
