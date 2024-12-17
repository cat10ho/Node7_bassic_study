import { Router } from "express";
import { prisma } from "../utils/prisma/index.js";

const router = Router();

//전체조회
router.get("/agent", async (req, res, next) => {
  const allAgents = await prisma.players.findMany({
    select: {
      name: true,
      speed: true,
      shouting: true,
      grade: true,  
    },
  })

  res.status(201).json({ data: allAgents}); //이거 send는 html로 가공해서 보내는 거라 줄바꿈을 추가해서 넣는거.
});

//생성과 삭제.

router.post("/agent", async (req, res, next) => {
  const { name, speed, shouting, grade } = req.body; //음. 뭐 제한 없으니까.
  
  const newAgent = await prisma.players.create({
    data: {
      name: name,
      speed: +speed,
      shouting: +shouting,
      grade: grade,  
    },
  })

  const message = ` <p>성공적으로 ${newAgent}을 생성함함.</p>`;
  res.status(201).json({ data: newAgent});
});

//수정.
router.patch("/agent/:agentId", async (req, res, next) => {
  const agentId = req.params.agentId;
  const { name, speed, shouting, grade } = req.body;

  await prisma.players.update({
    data: { name, speed: +speed, shouting: +shouting, grade },
    where: {
      id: +agentId,
    },
  });
  
    res.status(201).json(`업데이트 완료.`);
      
});



router.delete("/agent/:agentId", async (req, res, next) => {
  const agentId = req.params.agentId;

  const agent = await prisma.players.findFirst({ where: { id: +agentId } });

  if (!agent) {
    return res.status(404).send('없음');
  }

  await prisma.players.delete({ where: { id: +agentId} });

    const message = ` 성공적으로 삭제함.`;
    res.status(201).json(message);
 
});

export default router;
