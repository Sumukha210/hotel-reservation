export interface INavLinks {
  name: string;
  path: string;
}

export const NavLinkOptions: INavLinks[] = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "rooms", path: "/rooms" },
  { name: "gallery", path: "/gallery" },
  { name: "contact", path: "/contact" },
];
