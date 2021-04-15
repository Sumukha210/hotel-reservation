import Link from "next/link";
import { INavLinks, NavLinkOptions } from "../NavBar/config";

const QuickLinks = () => {
  return (
    <>
      <h5 className="text-capitalize footer--subheading my-3">quick links</h5>
      <ul>
        {NavLinkOptions.map(({ name, path }: INavLinks) => (
          <Link href={path} key={name}>
            <li className="text-secondary nav-link text-capitalize">{name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default QuickLinks;
