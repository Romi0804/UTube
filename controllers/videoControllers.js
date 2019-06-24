export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("Search", { pageTitle: "Search" });
export const video = (req, res) =>
  res.render("Videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("Uploads", { pageTitle: "Uploads" });
export const videoDetail = (req, res) =>
  res.render("Video Details", { pageTitle: "Video Details" });
export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });
