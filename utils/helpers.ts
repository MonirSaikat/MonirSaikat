export const activeLink = (router: any, path: string) => {
  if (path === "/") return router.pathname === path;
  return router.pathname.includes(path);
};
