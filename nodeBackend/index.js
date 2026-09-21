BigInt.prototype.toJSON = function () {
  return this.toString();
};

import express from "express";
import cookieParser from "cookie-parser"
import { userRouter} from "./routes/userRouter.js" ;
import {productRouter } from "./routes/productRouter.js"
import { productVariantRouter } from "./routes/product/productVariantRouter.js";
import {cartRouter} from "./routes/cart/cartRouter.js"
import { paymentRouter } from "./routes/paymentRouter.js";
import { cartItemRouter } from "./routes/cart/cartItemRouter.js";
import { productImageRouter } from "./routes/product/productImageRouter.js";
import { productReviewRouter } from "./routes/reviews/productReviewRoutes.js";



const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/product-variants", productVariantRouter)
app.use("/product-images", productImageRouter)
app.use("/cart",cartRouter)
app.use("/cart-items", cartItemRouter)
app.use("/product-reviews", productReviewRouter)
app.use("/payment",paymentRouter)


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})