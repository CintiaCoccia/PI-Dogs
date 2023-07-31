const axios = require("axios");
const server = require("./src/app.js");
const { conn, Temperament } = require("./src/db.js");

conn.sync({ force: false }).then(() => {
    axios("https://api.thedogapi.com/v1/breeds").then((response) => {
        /*console.log(`Populating db with breeds`);
      const breedData = response.data;

      const allTemperaments = new Set();
      for (let i = 0; i < breedData.length; i++) {
        const breed = breedData[i];
        
        if (breed.temperament) {
          const oneTemperament = breed.temperament.split(", ");
          for (let j = 0; j < oneTemperament.length; j++) {
            const temperament = oneTemperament[j];
            allTemperaments.add(temperament);
          }
        }
      }

      const uniqueTemperaments = Array.from(allTemperaments);

      for (let i = 0; i < uniqueTemperaments.length; i++) { //itero array de temperamentos
        Temperament.create({                               //inserto a db
          name: uniqueTemperaments[i]
        })
      }*/

        server.listen(3001, () => {
            console.log("Server listening at 3001");
        });
    });
});

//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
