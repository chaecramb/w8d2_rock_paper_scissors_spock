var myApp = myApp || {};

myApp.additem = function() {
  $('ul').append('<li>' + item.value + '</li><button class="completed">Completed</button><button class="delete">Delete</button>');
};

myApp.moves = ["rock", "paper", "scissors", "lizard", "spock"];
myApp.wins = 0;
myApp.loses = 0;

myApp.computerMove = function() {
  return myApp.moves[Math.floor(Math.random()*5)];
};

myApp.loseHealth = function(who) {
  if (who == "computer") {
    $('#computer-health li:last-child').remove();
  } else if (who == "player") {
    $('#player-health li:last-child').remove();
  }
};

myApp.fightMessages = function () {
  if ((myApp.wins == 4) || (myApp.loses == 4)) {
    $("#message").attr("src", "http://cachemonet.com/src/center/finish.gif")
  };
  if ((myApp.wins >= 5) || (myApp.loses >= 5)) {
    $("#message").attr("src", "http://vignette1.wikia.nocookie.net/mkwikia/images/8/89/Fatality.png/revision/20120127115303")
  };
};

myApp.makeMove = function(playerMove) {
  var computerMove = myApp.computerMove()

  $("#moves").text('');
  $("#result").text('');
  $("#moves").append(playerMove);
  $("#moves").append(" vs ");
  $("#moves").append(computerMove);
  $("#result").append(myApp.winner(playerMove, computerMove));
  $("#wins").text(myApp.wins);
  $("#loses").text(myApp.loses);

  myApp.fightMessages();
};

myApp.winner = function(playerMove, computerMove) {
  switch (playerMove) {
    case "rock":
        if (computerMove === "rock") {
          return "Draw!"
        } else if (computerMove === "paper") {
          myApp.loses += 1;
          myApp.loseHealth("player");
          return "You lose!"
        } else if (computerMove === "scissors") {
          myApp.wins += 1;
          myApp.loseHealth("computer");
          return "You win!"      
        } else if (computerMove === "lizard") {
          myApp.wins += 1;
          myApp.loseHealth("computer");
          return "You win!"    
        } else if (computerMove === "spock") {
          myApp.loses += 1;
          myApp.loseHealth("player");
          return "You lose!" 
        };
      break;
    case "paper":
      if (computerMove === "rock") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!" 
      } else if (computerMove === "paper") {
        return "Draw!"
      } else if (computerMove === "scissors") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "lizard") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "spock") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!" 
      };
      break;
    case "scissors":
      if (computerMove === "rock") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "paper") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!"
      } else if (computerMove === "scissors") {
        return "Draw!"
      } else if (computerMove === "lizard") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!"
      } else if (computerMove === "spock") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      };
      break;
    case "lizard":
      if (computerMove === "rock") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "paper") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!"
      } else if (computerMove === "scissors") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "lizard") {
        return "Draw!"
      } else if (computerMove === "spock") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!"
      };
      break;
    case "spock":
      if (computerMove === "rock") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!"
      } else if (computerMove === "paper") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "scissors") {
        myApp.wins += 1;
        myApp.loseHealth("computer");
        return "You win!"
      } else if (computerMove === "lizard") {
        myApp.loses += 1;
        myApp.loseHealth("player");
        return "You lose!"
      } else if (computerMove === "spock") {
        return "Draw!"
      };
      break;
  };
};


(function() {

  $("#rock").click(function(){myApp.makeMove(rock.id)});
  $("#paper").click(function(){myApp.makeMove(paper.id)});
  $("#scissors").click(function(){myApp.makeMove(scissors.id)});
  $("#lizard").click(function(){myApp.makeMove(lizard.id)});
  $("#spock").click(function(){myApp.makeMove(spock.id)});

  $("#message").attr("src", "http://www.jtresca.com/test/FinishHim_Gif.gif")

})();


loseHealth = function(who) {
  if (who == "computer") {
    $('#computer-health li:last-child').remove();
  } else if (who == "player") {
    $('#player-health li:last-child').remove();
  }
}