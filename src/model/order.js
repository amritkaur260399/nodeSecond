const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const orderSchema = mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: user,
      required: true,
      trim: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalQty: {
      type: Number,
      required: true,
    },
    cancellable: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["pending", "cancellable", "complete"],
      default: "pending",
    },
    items: [
      {
        productId: {
          type: ObjectId,
          ref: product,
          required: true,
        },
        qty:{
            type:Number,
            required:true,
        }
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
