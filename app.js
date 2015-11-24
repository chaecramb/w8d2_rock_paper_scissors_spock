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
    $('#computer-health li:nth-child('+(6-myApp.wins)+') div').attr('style', 'background-color:red');
  } else if (who == "player") {
    $('#player-health li:nth-child('+(6-myApp.loses)+') div').attr('style', 'background-color:red');
  }
};

myApp.fightMessages = function () {
  if ((myApp.wins == 4) || (myApp.loses == 4)) {
    $("#message").attr("src", "http://cachemonet.com/src/center/finish.gif");
  };
  if ((myApp.wins >= 5) || (myApp.loses >= 5)) {
    $("#message").attr("src", "http://vignette1.wikia.nocookie.net/mkwikia/images/8/89/Fatality.png/revision/20120127115303");
  };
};

myApp.gameOver = function() {
  $("#rematch").removeClass("hidden");
  $(".moves").addClass("hidden");  
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

  if ((myApp.wins >= 5) || (myApp.loses >= 5)) {
    myApp.gameOver();
  };
};

myApp.win = function() {
  myApp.wins += 1;
  myApp.loseHealth("computer");
  return "You win!";  
};

myApp.lose = function() {
  myApp.loses += 1;
  myApp.loseHealth("player");
  return "You lose!"; 
};

myApp.winner = function(playerMove, computerMove) {

  if (playerMove === computerMove) {
    return "Draw!"
  } else {
    switch (playerMove) {
      case "rock":
          if ((computerMove === "paper") || (computerMove === "spock")) {
            return myApp.lose();  
          } else {
            return myApp.win();      
          }; 
        break;
      case "paper":
        if ((computerMove === "rock") || (computerMove === "spock")) {
          return myApp.win(); 
        } else {
          return myApp.lose();  
        };
        break;
      case "scissors":
        if ((computerMove === "rock") || (computerMove === "spock")) {
          return myApp.lose();  
        } else {
           return myApp.win();
        };
        break;
      case "lizard":
        if ((computerMove === "rock") || (computerMove === "scissors")) {
          return myApp.lose();  
        } else {
          return myApp.win();
        };
        break;
      case "spock":
        if ((computerMove === "rock") || (computerMove === "scissors")) {
          return myApp.win();
        } else {
          return myApp.lose();  
        };
        break;
    };
  };
};


(function() {

  $("#rock").click(function(){myApp.makeMove(rock.id)});
  $("#paper").click(function(){myApp.makeMove(paper.id)});
  $("#scissors").click(function(){myApp.makeMove(scissors.id)});
  $("#lizard").click(function(){myApp.makeMove(lizard.id)});
  $("#spock").click(function(){myApp.makeMove(spock.id)});

  $('#rematch').click(function() {
      location.reload();
  });

})();

