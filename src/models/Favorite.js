const { Schema, model } = require("mongoose");

const favoriteAdvert = new Schema(
  {
    user: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    favoriteAdverts: [{ type: String, index: true, unique: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Favorite", favoriteAdvert);
