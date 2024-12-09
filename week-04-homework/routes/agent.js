import { Router } from "express";

const router = Router();

const players = [
  { name: "차범근", speed: 100, shouting: 100, grade: "s" },
  { name: "메시", speed: 100, shouting: 100, grade: "s" },
  { name: "호날두", speed: 100, shouting: 100, grade: "s" },
];

//개별조회.
router.get("/agent/:agentId", async (req, res, next) => {
  const agentId = req.params.agentId;
  if (+agentId >= 0 && +agentId < players.length) {
    res
      .status(201)
      .send(
        `name: ${players[+agentId].name} ,speed: ${
          players[+agentId].speed
        } ,shouting: ${players[+agentId].shouting} ,grade: ${
          players[+agentId].grade
        }`
      );
  } else {
    res.status(404).send(`<p> 없는거 찾지말기.</p>`);
  }
});

//전체조회
router.get("/agent", async (req, res, next) => {
  const allAgents = players.map((player) => {
    return `name: ${player.name}, speed: ${player.speed}, shouting: ${player.shouting}, grade: ${player.grade}`;
  });

  res.status(201).send(allAgents.join("<br>")); //이거 send는 html로 가공해서 보내는 거라 줄바꿈을 추가해서 넣는거.
});

//생성과 삭제.

router.post("/agent", async (req, res, next) => {
  const { name, speed, shouting, grade } = req.body; //음. 뭐 제한 없으니까.
  //프론트엔드 관점에서 그냥 문자로 받는다고 하자.
  //숫자 아닌지 확인. 뭐 비어있는지 확인. 끝?

  const newAgent = { name, speed: +speed, shouting: +shouting, grade };
  players.push(newAgent);

  const message = ` <p>성공적으로 ${newAgent}을 생성함함.</p>`;
  res.status(201).send(message);
});



router.delete("/agent/:agentId", async (req, res, next) => {
  const agentId = req.params.agentId;

  if (+agentId >= 0 && +agentId < players.length) {
    const deleteAgent = players[+agentId].name;
    players.splice(+agentId, 1);

    const message = ` <p>성공적으로 ${deleteAgent}을 삭제함.</p>`;
    res.status(201).send(message);
  } else {
    res.status(404).send(`<p> 없는거 삭제 ㄴ</p>`);
  }
});

export default router;
