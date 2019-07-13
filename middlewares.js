import multer from "multer";
import routes from "./routes";

export const multerVideo = multer({ dest: "videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "UTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
