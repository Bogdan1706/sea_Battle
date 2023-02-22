

// var location1 = Math.floor(Math.random() * 5);
// var location2 = location1 + 1;
// var location3 = location2 + 1;
// console.log("Первая клетка" + location1);
// console.log("Вторая клетка" + location2);
// console.log("Третья клетка" + location3);
// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;
// var arrayAllMove = [];
// var checkingMoves;

// function recordTheNextMove (array, move) {
//   if (move == 0 || move <= 6) {
//     if (array.length == 1) {
//       alert ("Отличный вариант, давай посмотрим куда мы попали?");
//       return false;
//     } else if (array.length > 1){
//         for (var i = 0; i <= array.length - 2; i++) {
//           if (array[i] == move) {
//             alert ("Такой ход "+ array +" уже был, давай не будем повторяться!!!");
//             return true;
//           }
//         }
//     } else {
//       return false;
//     }
//   } else {
//     return true
//   }
  
  
// }

// while (! isSunk) {
 
//   guess = prompt (" Ready, aim, fire! (inter a number 0 - 6) : ");
//   arrayAllMove.push(guess);
//   checkingMoves = recordTheNextMove(arrayAllMove,guess);
//   if (checkingMoves) {
//     alert (" please enter a number from 0 - 6 !!! ")
//   } else {
//     guesses += 1;

//     if (guess == location1 || guess == location2 || guess == location3 ) {
//       hits += 1;
//       if (hits == 3) {
//         isSunk =  true;
//         alert("Победа!!! Мы потопили корабль!!!");
//       } else {
//         alert("Попадание!!! Так держать!!! Но корабль ещё не потоплен!!!");
//       }
//     } else {
//      alert("Мазила - промазал!!!");
//     }
//   }
 
  
  
// }



// document.write("Выстрелы : " + guesses +"</br>" ) ; 
// document.write("Попадания : " + hits +"</br>" );

// document.write(" The ship is destroyed!!! ")

var attack = document.getElementById("attack");
let observe = document.getElementById("observe");
let msg = "Я приветствую тебя!<br>Сейчас Я покажу Тебе как нужно побеждать!!!";
let msgSunk = "Тысяча пиратов!!! <br> ТЫ потопил мой любимый корабль!!!";
let msgMiss = "Ну ТЫ и ... МАЗИЛА !!!";
let msgHit = "Ты ПОПАЛ !!! <br> Я уверен это случайно!";
let msgmessage = "Пора расставить корабли !!!";
let msgmessage1 = "Твой ход АДМИРАЛ!";

let model = {
  boardSize : 10,
  numShips: [1,1,1,1,2,2,2,3,3,4],
  shipsSunk: 0,
  compShips : [
    { locations: ["0"],
      hits: [" "]
    },
    { locations: ["0"],
      hits: [" "]
    },
    { locations: ["0"],
      hits: [" "]
    },
    { locations: ["0"],
      hits: [" "]
    },
  
    { locations: ["0", "0"],
      hits: [" ", " "]
    },
    { locations: ["0", "0"],
      hits: [" ", " "]
    },
    { locations: ["0", "0"],
      hits: [" ", " "]
    },
  
    { locations: ["0", "0", "0"],
      hits: [" ", " ", " "]
    },
    { locations: ["0", "0", "0"],
      hits: [" ", " ", " "]
    },

    { locations: ["0", "0", "0", "0"],
      hits: [" ", " ", " ", " "]
    },
  ],

  useShips : [
    { locations: ["0"],
      hits: [" "]
    },
    { locations: ["0"],
      hits: [" "]
    },
    { locations: ["0"],
      hits: [" "]
    },
    { locations: ["0"],
      hits: [" "]
    },
  
    { locations: ["0", "0"],
      hits: [" ", " "]
    },
    { locations: ["0", "0"],
      hits: [" ", " "]
    },
    { locations: ["0", "0"],
      hits: [" ", " "]
    },
  
    { locations: ["0", "0", "0"],
      hits: [" ", " ", " "]
    },
    { locations: ["0", "0", "0"],
      hits: [" ", " ", " "]
    },
  
    { locations: ["0", "0", "0", "0"],
      hits: [" ", " ", " ", " "]
    },
  ],

  fire: function () {
    console.log("Начало боя")
  },

  isSunk: function (ship) {
    for (let a = 0; a < ship.locations.length; a++) {
      if(ship.hits[a] !== "hit") {
        return false;
      };
    }
    return true;
  },

  // generateShipLocations: function() {
  //   let locations;

  //   for (let i = 0; i < this.numShips)
  // }


};









var view = {
  // метод получает сообщения в облости сообщений
  displayMessage: function (msg) {
    var messageText = document.getElementById("message-text");
    messageText.innerHTML = msg; 
  },

  // метод получает маркер попаданий
  displayHits: function (location) {
    var locationHits = document.getElementById(location);
    locationHits.setAttribute("class", "hit");
  },

  // метод получает маркер поромахов
  displayMisses: function (location) {
    var locationMiss = document.getElementById(location);
    locationMiss.setAttribute("class", "miss");
  },

  displayUseShip: function (location) {
    var locationUseShip = document.getElementById(location);
    locationUseShip.setAttribute("class", "useShip");
  },

};

// Сообщение приветствие
view.displayMessage(msg);
// Клик в поле attack
attack.addEventListener("click", function (event) {
  for(let i = 0; i <model.numShips; i++) {
    var compShip = compShips[i];
    var index = compShip.locations.indexOf(event.target.id);
    if (index >= 0) {
      compShip.hits[index] = "hit";
      view.displayHits(event.target.id);
      view.displayMessage(msgHit);
      if(isSunk(compShip)) {
        model.shipsSunk ++ ;
        view.displayMessage(msgSunk);
      }
      return
    } else {
      view.displayMisses(event.target.id);
      view.displayMessage(msgMiss);
    }
  }
})

// Раставляем корабли
observe.addEventListener("click", function(event) {
  console.log(event.target.id);
  view.displayUseShip(event.target.id)
} )



