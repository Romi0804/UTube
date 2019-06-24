import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "UTube";
  res.locals.routes = routes;
  next();
};
