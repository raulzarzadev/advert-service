const { Schema, model } = require("mongoose");

const advertSquema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    title: String,
    contacts: Array,
    description: String,
    location: String,
    labels: Array,
    image: Object,
    classification: String,
    backgroundColor: String,
    barrio: {
      type: Object,
    },
    address: String,
    isPublished: Boolean,
    publishedOn: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Advert", advertSquema);
