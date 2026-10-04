BigInt.prototype.toJSON = function () {
  return this.toString();
};

import express from "express";
import cookieParser from "cookie-parser"
import { userRouter} from "./routes/users/userRouter.js" ;
import {productRouter } from "./routes/product/productRouter.js"
import { productVariantRouter } from "./routes/product/productVariantRouter.js";
import { cartRouter } from "./routes/cart/cartRouter.js"
import { cartItemRouter } from "./routes/cart/cartItemRouter.js";
import { productImageRouter } from "./routes/product_images/productImagesRouter.js";
import { productReviewRouter } from "./routes/reviews/productReviewRoutes.js";



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/product-variants", productVariantRouter)
app.use("/product-images", productImageRouter)
app.use("/cart",cartRouter)
app.use("/cart-items", cartItemRouter)
app.use("/product-reviews", productReviewRouter)


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})