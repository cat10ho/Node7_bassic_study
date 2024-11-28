const findTreasure = new Promise((resolve, reject) => {
    setTimeout(() => {
          const success = Math.random() > 0.9;
          if (success) {
              resolve("축하합니다! 황금 보물을 발견했습니다!");
          } else {
              reject("보물을 찾는 데 실패했습니다. 다시 시도하세요.");
          }
    }, 3000);
  });
  
  // 보물 상자 열기 실행
  findTreasure
    .then((message) => {
      console.log(message); // 성공 메시지
    })
    .catch((error) => {
      console.log(error); // 실패 메시지
    });