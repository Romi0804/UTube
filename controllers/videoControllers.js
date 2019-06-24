export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("Search");
export const video = (req, res) => res.render("Videos");
export const upload = (req, res) => res.send("Uploads");
export const videoDetail = (req, res) => res.send("Video Details");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
