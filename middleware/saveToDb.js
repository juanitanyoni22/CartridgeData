const mongoose = require("mongoose");

const { check } = require("express-validator");

const bookingSchema = new mongoose.Schema(
  {
    came: {
      type: String,
      required: true,
      minlength: [2, `please enter a valid name`],
    },
    type: {
        type: String,
        required: true,
      },
    code: {
      type: String,
      required: true
    
    },  pageYield: {
        type: String,
        required: true,
      },
      compatiblePrinter: {
        type: Array,
        required: true
      },
      brand: {
        type: String,
        required: true
      }})