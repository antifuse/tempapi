import sensor from "node-dht-sensor";
import express from "express";
import { env } from "process";
const s = sensor.promises;
const app = express();

app.get("/temp", (req, res) => {
    s.read(11, 4).then( t => {
        res.send(t);
    });
});

app.listen(3328);