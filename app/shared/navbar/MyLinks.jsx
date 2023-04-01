export const customlinks = [
  { name: "Home", link: "/welcome" },
  { name: "Explore", link: "/explore" },
  { name: "Project", link: "/start-project" },
  // { name: "Blogs", link: "/blogs" },
  // { name: "Stories", link: "/stories" },
  // { name: "Events", link: "/events" },
  // { name: "Learn", link: "/learn" },
  {
    name: "About",
    submenu: [
      {
        name: "Blogs",
        sublink: "/blogs",
      },
      {
        name: "Stories",
        sublink: "/stories",
      },
      {
        name: "Events",
        sublink: "/events",
      },
      {
        name: "Learn",
        sublink: "/learn",
      },
    ],
  },
  { name: "Login", link: "/login" },
];
