(function() {
    var game = {

        placeTaken: ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
        playerChoice: "",
        compChoice: "",
        playing: false,

        init: function() {
            this.cacheDom();
            this.events();
        },

        cacheDom: function() {
            this.$el = $(".game-container");
            this.$con = $(".controller");

            //Game container dom
            this.turn = this.$el.find(".turn");
            this.clickDisable = this.$el.find(".disable-click");
            this.boxes = this.$el.find(".box");
            this.winner = this.$el.find(".winner");
            this.message = this.$el.find(".message");

            //controllers Dom
            this.begin = this.$con.find(".begin");
            this.startButton = this.$con.find(".start");
            this.xAndO = this.$con.find(".xando");
            this.choice = this.$con.find(".choice");
            this.buttonX = this.$con.find(".X");
            this.buttonO = this.$con.find(".O");
            this.resetContainer = this.$con.find(".reset-game");
            this.resetButton = this.$con.find(".reset");
        },

        //Run a function in click event
        events: function() {
            this.startButton.click(this.startGame.bind(this));
            this.choice.on("click", this.playerChoiceXO.bind(this));
            this.boxes.on("click", this.startPlaying.bind(this));
            this.resetButton.on("click", this.gameReset.bind(this));
        },

        //Start the game when start button is pressed
        startGame: function(e) {
            e.preventDefault();
            this.begin.addClass("hide");
            this.xAndO.removeClass("hide");
        },

        //Ask Player for choice of X and O
        playerChoiceXO: function(e) {
            e.preventDefault();
            this.playerChoice = $(e.target).text();

            if(this.playerChoice === "X"){
                this.compChoice = "O";

            }else {
                this.compChoice = "X";

            }

            this.xAndO.addClass("hide");
            this.clickDisable.addClass("hide");
            this.turn.text("Player Turn");
        },

        //Place the X and O on board
        startPlaying: function(e) {
            e.preventDefault();
            var $boardId = $(e.target).attr("id");

            if(!this.playing){
                if(this.placeTaken[$boardId] === "#"){
                    this.boxes[$boardId].text = this.playerChoice;
                    this.placeTaken[$boardId] = this.playerChoice;
                    this.winGame(this.playerChoice);
                    this.playing = true;
                    this.startPlaying(e);
                }
            }else {
                this.compTurn();
            }

        },

        //This will check where to make Move.
        compTurn: function() {
            var place = this.placeTaken;
            var choice = this.playerChoice;

            //Check for place to stop user from wining
            if (place[0] === choice && place[1] === choice && place[2] === "#" && this.playing === true) {

                this.boxes[2].text = this.compChoice;
                this.placeTaken[2] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[1] === choice && place[2] === choice && place[0] === "#" && this.playing === true) {

                this.boxes[0].text = this.compChoice;
                this.placeTaken[0] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[3] === choice && place[4] === choice && place[5] === "#" && this.playing === true) {

                this.boxes[5].text = this.compChoice;
                this.placeTaken[5] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[4] === choice && place[5] === choice && place[3] === "#" && this.playing === true) {

                this.boxes[3].text = this.compChoice;
                this.placeTaken[3] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[6] === choice && place[7] === choice && place[8] === "#" && this.playing === true) {

                this.boxes[8].text = this.compChoice;
                this.placeTaken[8] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[7] === choice && place[8] === choice && place[6] === "#" && this.playing === true) {

                this.boxes[6].text = this.compChoice;
                this.placeTaken[6] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === choice && place[4] === choice && place[8] === "#" && this.playing === true) {

                this.boxes[8].text = this.compChoice;
                this.placeTaken[8] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[8] === choice && place[4] === choice && place[0] === "#" && this.playing === true) {

                this.boxes[0].text = this.compChoice;
                this.placeTaken[0] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[2] === choice && place[4] === choice && place[6] === "#" && this.playing === true) {

                this.boxes[6].text = this.compChoice;
                this.placeTaken[6] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[6] === choice && place[4] === choice && place[2] === "#" && this.playing === true) {

                this.boxes[2].text = this.compChoice;
                this.placeTaken[2] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === choice && place[2] === choice && place[1] === "#" && this.playing === true) {

                this.boxes[1].text = this.compChoice;
                this.placeTaken[1] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[3] === choice && place[5] === choice && place[4] === "#" && this.playing === true) {

                this.boxes[4].text = this.compChoice;
                this.placeTaken[4] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[6] === choice && place[8] === choice && place[7] === "#" && this.playing === true) {

                this.boxes[7].text = this.compChoice;
                this.placeTaken[7] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === choice && place[6] === choice && place[3] === "#" && this.playing === true) {

                this.boxes[3].text = this.compChoice;
                this.placeTaken[3] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[1] === choice && place[7] === choice && place[4] === "#" && this.playing === true) {

                this.boxes[4].text = this.compChoice;
                this.placeTaken[4] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[2] === choice && place[8] === choice && place[5] === "#" && this.playing === true) {

                this.boxes[5].text = this.compChoice;
                this.placeTaken[5] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === choice && place[4] === choice && place[8] === "#" && this.playing === true) {

                this.boxes[8].text = this.compChoice;
                this.placeTaken[8] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[3] === choice && place[6] === choice && place[0] === "#" && this.playing === true) {

                this.boxes[0].text = this.compChoice;
                this.placeTaken[0] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[4] === choice && place[7] === choice && place[1] === "#" && this.playing === true) {

                this.boxes[1].text = this.compChoice;
                this.placeTaken[1] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[5] === choice && place[8] === choice && place[2] === "#" && this.playing === true) {

                this.boxes[2].text = this.compChoice;
                this.placeTaken[2] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === choice && place[3] === choice && place[6] === "#" && this.playing === true) {

                this.boxes[6].text = this.compChoice;
                this.placeTaken[6] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[1] === choice && place[4] === choice && place[7] === "#" && this.playing === true) {

                this.boxes[7].text = this.compChoice;
                this.placeTaken[7] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[2] === choice && place[5] === choice && place[8] === "#" && this.playing === true) {

                this.boxes[8].text = this.compChoice;
                this.placeTaken[8] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === choice && place[8] === choice && place[4] === "#" && this.playing === true) {

                this.boxes[4].text = this.compChoice;
                this.placeTaken[4] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[2] === choice && place[6] === choice && place[4] === "#" && this.playing === true) {

                this.boxes[4].text = this.compChoice;
                this.placeTaken[4] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else {
                this.compAI();
            }

        },

        compAI: function() {
            var place = this.placeTaken;
            var choice = this.playerChoice;

            if(place[4] === "#" && this.playing === true){

                this.boxes[4].text = this.compChoice;
                this.placeTaken[4] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[0] === "#" && this.playing === true) {

                this.boxes[0].text = this.compChoice;
                this.placeTaken[0] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[8] === "#" && this.playing === true) {

                this.boxes[8].text = this.compChoice;
                this.placeTaken[8] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[5] === "#" && this.playing === true) {

                this.boxes[5].text = this.compChoice;
                this.placeTaken[5] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[1] === "#" && this.playing === true) {

                this.boxes[1].text = this.compChoice;
                this.placeTaken[1] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[7] === "#" && this.playing === true) {

                this.boxes[7].text = this.compChoice;
                this.placeTaken[7] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[2] === "#" && this.playing === true) {

                this.boxes[2].text = this.compChoice;
                this.placeTaken[2] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[6] === "#" && this.playing === true) {

                this.boxes[6].text = this.compChoice;
                this.placeTaken[6] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }else if (place[3] === "#" && this.playing === true) {

                this.boxes[3].text = this.compChoice;
                this.placeTaken[3] = this.compChoice;
                this.winGame(this.compChoice);
                this.playing = false;

            }
        },



        // Check if any one winGame
        winGame: function(who) {
            var whichPlayer = who;

            if (this.placeTaken[0] === whichPlayer && this.placeTaken[1] === whichPlayer && this.placeTaken[2] === whichPlayer || this.placeTaken[3] === whichPlayer && this.placeTaken[4] === whichPlayer && this.placeTaken[5] === whichPlayer || this.placeTaken[6] === whichPlayer && this.placeTaken[7] === whichPlayer && this.placeTaken[8] === whichPlayer) {

                if(whichPlayer === this.playerChoice){
                    this.winner.removeClass("hide");
                    this.message.text("Player Won");
                    this.turn.text("");
                    this.resetContainer.removeClass("hide");
                }else{
                    this.winner.removeClass("hide");
                    this.message.text("Computer Won");
                    this.turn.text("");
                    this.resetContainer.removeClass("hide");
                }

            }else if (this.placeTaken[0] === whichPlayer && this.placeTaken[3] === whichPlayer && this.placeTaken[6] === whichPlayer || this.placeTaken[1] === whichPlayer && this.placeTaken[4] === whichPlayer && this.placeTaken[7] === whichPlayer || this.placeTaken[2] === whichPlayer && this.placeTaken[5] === whichPlayer && this.placeTaken[8] === whichPlayer) {

                if(whichPlayer === this.playerChoice){
                    this.winner.removeClass("hide");
                    this.message.text("Player Won");
                    this.turn.text("");
                    this.resetContainer.removeClass("hide");
                }else{
                    this.winner.removeClass("hide");
                    this.message.text("Computer Won");
                    this.turn.text("");
                    this.resetContainer.removeClass("hide");
                }

            }else if (this.placeTaken[0] === whichPlayer && this.placeTaken[4] === whichPlayer && this.placeTaken[8] === whichPlayer || this.placeTaken[2] === whichPlayer && this.placeTaken[4] === whichPlayer && this.placeTaken[6] === whichPlayer) {

                if(whichPlayer === this.playerChoice){
                    this.winner.removeClass("hide");
                    this.message.text("Player Won");
                    this.turn.text("");
                    this.resetContainer.removeClass("hide");
                }else{
                    this.winner.removeClass("hide");
                    this.message.text("Computer Won");
                    this.turn.text("");
                    this.resetContainer.removeClass("hide");
                }

            }else if (this.placeTaken.indexOf("#") === -1) {

                this.winner.removeClass("hide");
                this.message.text("It's a Draw");
                this.turn.text("");
                this.resetContainer.removeClass("hide");

            }else {
                if(whichPlayer === this.playerChoice){
                    this.turn.text("Computer Turn");
                }else{
                    this.turn.text("Player Turn");
                }
            }
        },

        //Reset the game
        gameReset: function(e){
            e.preventDefault();
            this.placeTaken = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
            this.playerChoice = "";
            this.compChoice = "";
            this.playing = false;

            for(var i = 0; i < 9; i++){
                this.boxes[i].text = "";
            }

            this.winner.addClass("hide");
            this.message.empty();
            this.resetContainer.addClass("hide");
            this.begin.removeClass("hide");
            this.clickDisable.removeClass("hide");
        }
    };

    game.init();
})();
