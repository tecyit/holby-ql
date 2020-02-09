import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "#root/config";
import customersRouter from '#root/routes/customers.routes';
 
const PORT = process.env.PORT || config.PORT;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

app.use( 
  cors({
    credentials: true,
    origin: '*'
  })
);

app.use('/api/v1/customers', customersRouter);

app.listen(PORT, () => 
console.info(` 
  ################################################
  🚀 Server Running on Port ${PORT} 🚀
  ################################################
`));

export default app;