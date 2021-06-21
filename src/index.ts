import sensor from "node-dht-sensor";
import express from "express";
import { env } from "process";
const s = sensor.promises;
const app = express();

app.get("/temp", (req, res) => {
    //@ts-ignore
    s.read(22, parseInt(req.params.p) || 4).then( t => {
        res.send(t);
    });
});

app.listen(3328);