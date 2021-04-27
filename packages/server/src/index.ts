import express, { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 6465;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello Battleships");
});

app.listen(port, () => console.log(`listening on port: ${port}`));
