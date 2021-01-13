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
  saveFavoriteAdvert,
  getFavoriteList,
  deleteFavoriteAdvert
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
    .put(isAuthenticated, deleteFavoriteAdvert)

router.route("/favoritesList/:userId")
    .get(isAuthenticated, getFavoriteList)

module.exports = router;
