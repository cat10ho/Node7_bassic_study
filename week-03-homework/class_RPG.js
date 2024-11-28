class Character {
    constructor(name, level) {
      this.name = name; 
      this.level = level;
      this.health = 100; 
      this.atk = 20;
    }
  
    showStatus() {
      console.log(
        `이름: ${this.name}, 레벨: ${this.level}, 체력: ${this.health}, 공격력: ${this.atk}`
      );
    }
  
    heal(target ,amount) {
        target.health += amount;
        console.log(`${target.name}의 체력이 ${amount}만큼 회복되었습니다.`);
      }

   
      attack(target) {
      target.health -= this.atk;
      console.log(`${this.name}가 공격을 시도합니다!`);
      console.log(`공격이 성공하여 ${target.name}의 체력이 ${this.atk}만큼 줄어들었습니다.`);
    }

    levelUp() {
        this.atk = this.atk + Math.floor(3*Math.random());
        this.health = this.health + Math.floor(10*Math.random());
        
        console.log('레벨업을 완료하였습니다.');
      }
  }
  
  // 캐릭터 생성 (객체 만들기)
  const hero = new Character('용사', 1);
  const mage = new Character('마법사', 1);
  const danc = new Character('무희', 1);
  

  hero.attack(mage)
  mage.showStatus();
  hero.heal(mage,20);
  mage.showStatus(); 
  
  hero.levelUp();
  hero.showStatus()
