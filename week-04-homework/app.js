import express from 'express';
import agentRouter from './routes/agent.js';

const app = express();

app.use(express.json());
app.use("/api", [
    agentRouter,
  ]);

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});

//./week-04-homework/app.js