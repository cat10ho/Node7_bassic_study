import { Router } from 'express';

const router = Router();

const players = [
    {name:"차범근", speed: 100, shouting:100, grade: "s"},
    {name:"메시", speed: 100, shouting:100, grade: "s"},
    {name:"호날두", speed: 100, shouting:100, grade: "s"}
  ]

  //개별조회.
router.get("/agent/:agentId", async (req, res, next) => {
    const agentId = req.params.agentId;
    res.send(`name: ${players[+agentId].name} ,speed: ${players[+agentId].speed} ,shouting: ${players[+agentId].shouting} ,grade: ${players[+agentId].grade}`);
})

//전체조회
router.get("/agent", async (req, res, next) => {
    const formattedPlayers = players.map(player => {
        return `name: ${player.name}, speed: ${player.speed}, shouting: ${player.shouting}, grade: ${player.grade}`;
      });
})


export default router;