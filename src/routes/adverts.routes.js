const { Router } = require("express");
const router = Router();
const isAuthenticated = require("../authenticatons/jwt.authentication");

const {
  getAllAdverts,
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

router.route( "/all")
    .get(isAuthenticated, getAllAdverts)

router.route("/:id")
    .get(isAuthenticated, getAdvertsByOwner)
    .delete(isAuthenticated, deleteAdvert);

router.route("/user/:id")
    .get(isAuthenticated, getAdvertsByOwner)

router.route("/editar/:id") 
    .put(updateAdvert)
    .get(isAuthenticated, getAdvert);

router.route("/favorite/:userId")
    .post(isAuthenticated, saveFavoriteAdvert)    
    .get(isAuthenticated, getFavoriteAdverts)
    .put(isAuthenticated, deleteFavoriteAdvert)

router.route("/favoritesList/:userId")
    .get(isAuthenticated, getFavoriteList)

module.exports = router;
