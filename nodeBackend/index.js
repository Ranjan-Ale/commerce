BigInt.prototype.toJSON = function () {
  return this.toString();
};

import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url";
import { userRouter} from "./routes/users/userRouter.js" ;
import {productRouter } from "./routes/product/productRouter.js"
import { productVariantRouter } from "./routes/product/productVariantRouter.js";
import { cartRouter } from "./routes/cart/cartRouter.js"
import { cartItemRouter } from "./routes/cart/cartItemRouter.js";
import { productImageRouter } from "./routes/product_images/productImagesRouter.js";
import { productReviewRouter } from "./routes/reviews/productReviewRoutes.js";
import { orderRouter } from "./routes/orders/orderRouter.js";
import { categoriesRouter } from "./routes/categories/categoriesRouter.js";



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors({
  origin:"http://localhost:5173"
}))

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/product-variants", productVariantRouter)
app.use("/product-images", productImageRouter)
app.use("/cart",cartRouter)
app.use("/cart-items", cartItemRouter)
app.use("/product-reviews", productReviewRouter)
app.use("/orders", orderRouter)
app.use("/categories", categoriesRouter)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})