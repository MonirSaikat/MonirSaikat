export const activeLink = (router, path) => {
  if (path === "/") return router.pathname === path;
  return router.pathname.includes(path);
};
