BigInt.prototype.toJSON = function () {
  return this.toString();
};

import express from "express";
import { userRouter} from "./routes/userRouter.js" ;
import {productRouter } from "./routes/productRouter.js"
import { productVariantRouter } from "./routes/productVariant.js";
import {cartRouter} from "./routes/cartRouter.js"
import { paymentRouter } from "./routes/paymentRouter.js";


const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/product/variants", productVariantRouter)
app.use("/cart",cartRouter)
app.use("/payment",paymentRouter)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})