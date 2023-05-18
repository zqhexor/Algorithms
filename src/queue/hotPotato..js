import { Queue } from './index.js';

function hotPotato(elementList, num) {
  const eliminatedList = [];
  const queue = new Queue();
  elementList.forEach(item => queue.enqueue(item));

  while (queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      queue.enqueue(queue.dequeue());
    }
    const eliminated = queue.dequeue();
    console.log(`${eliminated}被淘汰了`);
    eliminatedList.push(eliminated);
  }

  const winner = queue.dequeue();
  console.log(`${winner}取得最后的胜利`);
  return {
    eliminated: eliminatedList,
    winner
  };
}

hotPotato(['Taylor', 'Avril', 'Ed', 'Lauv', 'Troye'], 8);
