const { Router } = require("express");
const router = Router();
const isAuthenticated = require("../authenticatons/jwt.authentication");

const {
  getManagerAdverts,
  getPublishedAdverts,
  getAdvertsByOwner,
  getAdvert,
  createAdvert,
  deleteAdvert,
  updateAdvert,
  getFavoriteAdverts,
  saveFavoriteAdvert
} = require("../controllers/adverts.controlles");

router.route("/")
    .get(getPublishedAdverts)
    .post(isAuthenticated, createAdvert);

router.route("/:id")
  .get(isAuthenticated, getAdvertsByOwner)
  .delete(isAuthenticated, deleteAdvert);

router.route("/editar/:id") 
    .put(updateAdvert)
    .get(isAuthenticated, getAdvert);

router.route( "/allAdverts")
    .get(isAuthenticated, getManagerAdverts)

router.route("/favorite/:userId")
    .post(isAuthenticated, saveFavoriteAdvert)    
    .get(isAuthenticated, getFavoriteAdverts)


module.exports = router;
