import { Router } from 'express';

const router = Router();

const players = [
    {name:"차범근", speed: 100, shouting:100, grade: "s"},
    {name:"메시", speed: 100, shouting:100, grade: "s"},
    {name:"호날두", speed: 100, shouting:100, grade: "s"}
  ]

router.get("/agent", async (req, res, next) => {
    res.send(`${players[0]}`);
})


export default router;