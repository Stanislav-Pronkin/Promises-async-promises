import json from './parser';
import read from './reader';

// TODO: write your code here
export default class GameSavingLoader {
  static load() {
    //        const data = read(); // возвращается Promise!
    //        const value = json(data); // возвращается Promise!

    //    return new Promise((resolve, reject) => {
    //      resolve(read());
    //      reject(new Error('Error'));
    //    }).then((data) => json(data));
    //  }

    return read().then((result) => json(result));
  }
}
