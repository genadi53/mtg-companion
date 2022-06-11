import mtg from "mtgsdk";
import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/cards/:set", async (req, res) => {
  const cards = [];
  const { set } = req.params;
  await mtg.card
    .all({ set })
    .on("data", (card) => {
      cards.push(card);
    })
    .on("end", () => {
      res.json(cards);
    });
});

app.get("/card/:name", async (req, res) => {
  const cards = [];
  const { name } = req.params;
  await mtg.card
    .all({ name }) //  pageSize: 1
    .on("data", (card) => {
      cards.push(card);
    })
    .on("end", () => {
      res.json(cards);
    });
});

app.get("/sets", async (req, res) => {
  const sets = [];
  await mtg.set
    .all()
    .on("data", (set) => {
      sets.push({
        code: set.code,
        name: set.name,
        releaseDate: set.releaseDate,
        type: set.type,
        block: set.block,
      });
    })
    .on("end", () => {
      res.json(sets);
    });
});

app.get("/set/:name", async (req, res) => {
  const sets = [];
  const { name } = req.params;

  await mtg.set
    .all({ name })
    .on("data", (set) => {
      sets.push(set);
    })
    .on("end", () => {
      res.json(sets);
    });
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found!");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
