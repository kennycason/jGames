/*
 * jGames   - display games states of various classic games using jQuery
 * Version  - 1.0
 * Date     - 2011 Aug 7
 * features - display/animate games states for chess, checkers, go, xiangqi, shogi, othello, cards, and 6 sided dice
 */
(function($){

    $.fn.extend({

        checkers: function(state) {

            var redPieceClass = "red_piece";
            var blackPieceClass = "black_piece";

            var boardLightClass = "board_light";
            var boardDarkClass = "board_dark";

	    function getPiece(pieceClass) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                return piece;
            };

             //Iterate over the current set of matched elements
            return this.each(function() {
                if(state.length != 8 && state[0].length != 8 ) {
                    $(this).html("Error! Board must be 8x8!");
                } else {
                    var board = $("<div></div>");

                    board.addClass("checker_board");

                    var dark = true;
                    for(var y = 0; y < 8; y++) {
                        for(var x = 0; x < 8; x++) {
                            var element;
                            if(x == 0) {
                                dark = !dark;
                            }
                            if(dark) {
                                element = getPiece(boardLightClass);
                            } else {
                                element = getPiece(boardDarkClass);
                            }
                            dark = !dark;
                            if(state[y][x] == "r") {
                                element.html(getPiece(redPieceClass));
                            } else if(state[y][x] == "b") {
                                element.html(getPiece(blackPieceClass));
                            }
                            board.append(element);
                        }
                    }

                    $(this).html(board);
                }
            });

        },
        
        chess: function(state) {

            var whitePawnClass = "white_pawn";
            var whiteRookClass = "white_rook";
            var whiteKnightClass = "white_knight";
            var whiteBishopClass = "white_bishop";
            var whiteKingClass = "white_king";
            var whiteQueenClass = "white_queen";
            var blackPawnClass = "black_pawn";
            var blackRookClass = "black_rook";
            var blackKnightClass = "black_knight";
            var blackBishopClass = "black_bishop";
            var blackKingClass = "black_king";
            var blackQueenClass = "black_queen";

            var boardLightClass = "board_light";
            var boardDarkClass = "board_dark";

	    function getPiece(pieceClass) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                return piece;
            };

             //Iterate over the current set of matched elements
            return $(this).each(function() {
                if(state.length != 8 && state[0].length != 8 ) {
                    $(this).html("Error! Board must be 8x8!");
                } else {
                    var board = $("<div></div>");

                    board.addClass("chess_board");

                    var dark = true;
                    for(var y = 0; y < 8; y++) {
                        for(var x = 0; x < 8; x++) {
                            var element;
                            if(x == 0) {
                                dark = !dark;
                            }
                            if(dark) {
                                element = getPiece(boardLightClass);
                            } else {
                                element = getPiece(boardDarkClass);
                            }
                            dark = !dark;
                            if(state[y][x] == "wp") {
                                element.html(getPiece(whitePawnClass));
                            } else if(state[y][x] == "wr") {
                                element.html(getPiece(whiteRookClass));
                            } else if(state[y][x] == "wn") {
                                element.html(getPiece(whiteKnightClass));
                            } else if(state[y][x] == "wb") {
                                element.html(getPiece(whiteBishopClass));
                            } else if(state[y][x] == "wk") {
                                element.html(getPiece(whiteKingClass));
                            } else if(state[y][x] == "wq") {
                                element.html(getPiece(whiteQueenClass));
                            } else if(state[y][x] == "bp") {
                                element.html(getPiece(blackPawnClass));
                            } else if(state[y][x] == "br") {
                                element.html(getPiece(blackRookClass));
                            } else if(state[y][x] == "bn") {
                                element.html(getPiece(blackKnightClass));
                            } else if(state[y][x] == "bb") {
                                element.html(getPiece(blackBishopClass));
                            } else if(state[y][x] == "bk") {
                                element.html(getPiece(blackKnightClass));
                            } else if(state[y][x] == "bq") {
                                element.html(getPiece(blackQueenClass));
                            }
                            board.append(element);
                        }
                    }
                     $(this).html(board);
                }

            });

        },

        xiangqi: function(state) {

            var redPawnClass = "red_pawn";
            var redRookClass = "red_rook";
            var redKnightClass = "red_knight";
            var redBishopClass = "red_bishop";
            var redKingClass = "red_king";
            var redAdvisorClass = "red_advisor";
            var redCannonClass = "red_cannon";

            var blackPawnClass = "black_pawn";
            var blackRookClass = "black_rook";
            var blackKnightClass = "black_knight";
            var blackBishopClass = "black_bishop";
            var blackKingClass = "black_king";
            var blackAdvisorClass = "black_advisor";
            var blackCannonClass = "black_cannon";

	    function getPiece(pieceClass) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                return piece;
            };


             //Iterate over the current set of matched elements
            return this.each(function() {
                
                if(state.length != 10 && state[0].length != 9 ) {
                    $(this).html("Error! Board must be 9x10!");
                } else {

                    var board = $("<div></div>");

                    board.addClass("xiangqi_board");

                    for(var y = 0; y < 10; y++) {
                        for(var x = 0; x < 9; x++) {

                            if(state[y][x] == "rp") {
                                board.append(getPiece(redPawnClass));
                            } else if(state[y][x] == "rr") {
                                board.append(getPiece(redRookClass));
                            } else if(state[y][x] == "rn") {
                                board.append(getPiece(redKnightClass));
                            } else if(state[y][x] == "rb") {
                                board.append(getPiece(redBishopClass));
                            } else if(state[y][x] == "rk") {
                                board.append(getPiece(redKingClass));
                            } else if(state[y][x] == "ra") {
                                board.append(getPiece(redAdvisorClass));
                            } else if(state[y][x] == "rc") {
                                board.append(getPiece(redCannonClass));
                            } else if(state[y][x] == "bp") {
                                board.append(getPiece(blackPawnClass));
                            } else if(state[y][x] == "br") {
                                board.append(getPiece(blackRookClass));
                            } else if(state[y][x] == "bn") {
                                board.append(getPiece(blackKnightClass));
                            } else if(state[y][x] == "bb") {
                                board.append(getPiece(blackBishopClass));
                            } else if(state[y][x] == "bk") {
                                board.append(getPiece(blackKingClass));
                            } else if(state[y][x] == "ba") {
                                board.append(getPiece(blackAdvisorClass));
                            } else if(state[y][x] == "bc") {
                                board.append(getPiece(blackCannonClass));
                            } else {
                                board.append(getPiece(""));
                            }
                        }
                    }
                    $(this).html(board);
                }
            });

        },

        go: function(state) {

            var size = state.length;

            var blackClass = "black";
            var whiteClass = "white";

            boardClass ="go_board";
            if(size == 19) {
                boardClass ="go_board";
            } else {
                boardClass = "go_board13x13";
            }

	    function getPiece(pieceClass) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                return piece;
            };


             //Iterate over the current set of matched elements
            return this.each(function() {
                
                if(state.length != 19 && state.length != 13 && state.length != state[0].length) {
                    $(this).html("Board must be 19x19 or 13x13!");
                } else {
                    var board = $("<div></div>");
                    board.addClass(boardClass);

                    for(var y = 0; y < size; y++) {
                        for(var x = 0; x < size; x++) {
                            if(state[y][x] == "b") {
                                board.append(getPiece(blackClass));
                            } else if(state[y][x] == "w") {
                                board.append(getPiece(whiteClass));
                            } else {
                                board.append(getPiece(""));
                            }
                        }
                    }
                    $(this).html(board);
                }
                
            });

        },

        shogi: function(state) {

            var oshoClass = "osho";
            var gyokushoClass = "gyokusho";
            var hishaClass = "hisha";
            var ryuClass = "ryu";
            var kakugyoClass = "kakugyo";
            var ryumaClass = "ryuma";
            var kinshoClass = "kinsho";
            var ginshoClass = "ginsho";
            var nariginClass = "narigin";
            var keimaClass = "keima";
            var narikeiClass = "narikei";
            var kyoshaClass = "kyosha";
            var narikyoClass = "narikyo";
            var fuhyoClass = "fuhyo";
            var tokinClass = "tokin";

            var boardPieceClass = "board_piece";


	    function getPiece(pieceClass, flip) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                if(flip) {  // flip image downward
                    piece.addClass("rotate180");
                }
                return piece;
            };


             //Iterate over the current set of matched elements
            return this.each(function() {
                if(state.length != 9 && state[0].length != 9 ) {
                    $(this).html("Error! Board must be 9x9");
                } else {
                    var board = $("<div></div>");

                    board.addClass("shogi_board");

                    for(var y = 0; y < 9; y++) {
                        for(var x = 0; x < 9; x++) {
                            var element = getPiece(boardPieceClass);

                            // Up Facing Pieces
                            if(state[y][x] == "K") { // king general, 王, ō
                                element.html(getPiece(oshoClass));
                            } else if(state[y][x] == "K2") { // jeweled general, 玉, gyoku
                                element.html(getPiece(gyokushoClass));
                            } else if(state[y][x] == "R") { // flying chariot, 飛, hi
                                element.html(getPiece(hishaClass));
                            } else if(state[y][x] == "+R") { // dragon king, 龍 or 竜*, ryū
                                element.html(getPiece(ryuClass));
                            } else if(state[y][x] == "B") { // angle mover, 角, kaku
                                element.html(getPiece(kakugyoClass));
                            } else if(state[y][x] == "+ ") { // dragon horse, 馬, uma
                                element.html(getPiece(ryumaClass));
                            } else if(state[y][x] == "G") { // gold general, 金, kin
                                element.html(getPiece(kinshoClass));
                            } else if(state[y][x] == "S") { // silver general, 銀, gin
                                element.html(getPiece(ginshoClass));
                            } else if(state[y][x] == "+S") { // promoted silver, (全), —
                                element.html(getPiece(nariginClass));
                            } else if(state[y][x] == "N") { // cassia horse, 桂, kei
                                element.html(getPiece(keimaClass));
                            } else if(state[y][x] == "+N") { // promoted cassia, (圭 or 今), —
                                element.html(getPiece(narikeiClass));
                            } else if(state[y][x] == "L") { // incense chariot, 香, kyō
                                element.html(getPiece(kyoshaClass));
                            } else if(state[y][x] == "+L") { // promoted incense, (杏 or 仝), —
                                element.html(getPiece(narikyoClass));
                            } else if(state[y][x] == "p") { // foot soldier, 歩,	fu
                                element.html(getPiece(fuhyoClass));
                            } else if(state[y][x] == "+p") { // reaches gold,と (or 个) 	to
                                element.html(getPiece(tokinClass));

                              // Down Facing Pieces
                            } else if(state[y][x] == "K-") { // king general, 王, ō
                                element.html(getPiece(oshoClass, true));
                            } else if(state[y][x] == "K2-") { // jeweled general, 玉, gyoku
                                element.html(getPiece(gyokushoClass, true));
                            } else if(state[y][x] == "R-") { // flying chariot, 飛, hi
                                element.html(getPiece(hishaClass, true));
                            } else if(state[y][x] == "+R-") { // dragon king, 龍 or 竜*, ryū
                                element.html(getPiece(ryuClass, true));
                            } else if(state[y][x] == "B-") { // angle mover, 角, kaku
                                element.html(getPiece(kakugyoClass, true));
                            } else if(state[y][x] == "+ -") { // dragon horse, 馬, uma
                                element.html(getPiece(ryumaClass, true));
                            } else if(state[y][x] == "G-") { // gold general, 金, kin
                                element.html(getPiece(kinshoClass, true));
                            } else if(state[y][x] == "S-") { // silver general, 銀, gin
                                element.html(getPiece(ginshoClass, true));
                            } else if(state[y][x] == "+S-") { // promoted silver, (全), —
                                element.html(getPiece(nariginClass, true));
                            } else if(state[y][x] == "N-") { // cassia horse, 桂, kei
                                element.html(getPiece(keimaClass, true));
                            } else if(state[y][x] == "+N-") { // promoted cassia, (圭 or 今), —
                                element.html(getPiece(narikeiClass, true));
                            } else if(state[y][x] == "L-") { // incense chariot, 香, kyō
                                element.html(getPiece(kyoshaClass, true));
                            } else if(state[y][x] == "+L-") { // promoted incense, (杏 or 仝), —
                                element.html(getPiece(narikyoClass, true));
                            } else if(state[y][x] == "p-") { // foot soldier, 歩,	fu
                                element.html(getPiece(fuhyoClass, true));
                            } else if(state[y][x] == "+p-") { // reaches gold,と (or 个) 	to
                                element.html(getPiece(tokinClass, true));
                            }
                            board.append(element);
                        }
                    }
                     $(this).html(board);
                }

            });

        },

        othello: function(state) {

            var whitePieceClass = "white_piece";
            var blackPieceClass = "black_piece";

            var boardPieceClass = "board_piece";


	    function getPiece(pieceClass) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                return piece;
            };

             //Iterate over the current set of matched elements
            return this.each(function() {
                if(state.length != 8 && state[0].length != 8 ) {
                    $(this).html("Error! Board must be 8x8!");
                } else {
                    var board = $("<div></div>");

                    board.addClass("othello_board");

                    for(var y = 0; y < 8; y++) {
                        for(var x = 0; x < 8; x++) {
                            var element = getPiece(boardPieceClass);

                            if(state[y][x] == "w") {
                                element.html(getPiece(whitePieceClass));
                            } else if(state[y][x] == "b") {
                                element.html(getPiece(blackPieceClass));
                            }
                            board.append(element);
                        }
                    }

                    $(this).html(board);
                }
            });

        },


        tictactoe: function(state) {

            var xClass = "x";
            var oClass = "o";

	    function getPiece(pieceClass) {
                var piece = $("<div>");
                piece.addClass("piece");
                piece.addClass(pieceClass);
                return piece;
            };


             //Iterate over the current set of matched elements
            return this.each(function() {

                if(state.length != 3 && state[0].length != 3 ) {
                    $(this).html("Error! Board must be 3x3!");
                } else {

                    var board = $("<div></div>");

                    board.addClass("tictactoe_board");

                    for(var y = 0; y < 3; y++) {
                        for(var x = 0; x < 3; x++) {

                            if(state[y][x] == "x") {
                                board.append(getPiece(xClass));
                            } else if(state[y][x] == "o") {
                                board.append(getPiece(oClass));
                            } else {
                                board.append(getPiece(""));
                            }
                        }
                    }
                    $(this).html(board);
                }
            });

        },

        d6: function(numbers) {

            var oneClass = "one";
            var twoClass = "two";
            var threeClass = "three";
            var fourClass = "four";
            var fiveClass = "five";
            var sixClass = "six";

            function getPiece(pieceClass) {
                var diceHolder = $("<div></div>");
                diceHolder.addClass("dice");
                var dice = $("<div></div>");
                dice.addClass(pieceClass);
                diceHolder.html(dice);
                return diceHolder;
            };

            //Iterate over the current set of matched elements
            return this.each(function() {

                var holder = $("<div></div>");
                holder.addClass("dice_holder");

                for(var i = 0; i < numbers.length; i++) {
                    if(numbers[i] == 1) {
                        holder.append(getPiece(oneClass));
                    } else if(numbers[i] == 2) {
                        holder.append(getPiece(twoClass));
                    } else if(numbers[i] == 3) {
                        holder.append(getPiece(threeClass));
                    } else if(numbers[i] == 4) {
                        holder.append(getPiece(fourClass));
                    } else if(numbers[i] == 5) {
                        holder.append(getPiece(fiveClass));
                    } else if(numbers[i] == 6) {
                        holder.append(getPiece(sixClass));
                    }
                }
                $(this).html(holder);
            });

        },

        cards: function(cards) {

            var spades2Class = "spades_2";
            var spades3Class = "spades_3";
            var spades4Class = "spades_4";
            var spades5Class = "spades_5";
            var spades6Class = "spades_6";
            var spades7Class = "spades_7";
            var spades8Class = "spades_8";
            var spades9Class = "spades_9";
            var spades10Class = "spades_10";
            var spadesJackClass = "spades_jack";
            var spadesQueenClass = "spades_queen";
            var spadesKingClass = "spades_king";
            var spadesAceClass = "spades_ace";

            var clubs2Class = "clubs_2";
            var clubs3Class = "clubs_3";
            var clubs4Class = "clubs_4";
            var clubs5Class = "clubs_5";
            var clubs6Class = "clubs_6";
            var clubs7Class = "clubs_7";
            var clubs8Class = "clubs_8";
            var clubs9Class = "clubs_9";
            var clubs10Class = "clubs_10";
            var clubsJackClass = "clubs_jack";
            var clubsQueenClass = "clubs_queen";
            var clubsKingClass = "clubs_king";
            var clubsAceClass = "clubs_ace";

            var hearts2Class = "hearts_2";
            var hearts3Class = "hearts_3";
            var hearts4Class = "hearts_4";
            var hearts5Class = "hearts_5";
            var hearts6Class = "hearts_6";
            var hearts7Class = "hearts_7";
            var hearts8Class = "hearts_8";
            var hearts9Class = "hearts_9";
            var hearts10Class = "hearts_10";
            var heartsJackClass = "hearts_jack";
            var heartsQueenClass = "hearts_queen";
            var heartsKingClass = "hearts_king";
            var heartsAceClass = "hearts_ace";

            var diamonds2Class = "diamonds_2";
            var diamonds3Class = "diamonds_3";
            var diamonds4Class = "diamonds_4";
            var diamonds5Class = "diamonds_5";
            var diamonds6Class = "diamonds_6";
            var diamonds7Class = "diamonds_7";
            var diamonds8Class = "diamonds_8";
            var diamonds9Class = "diamonds_9";
            var diamonds10Class = "diamonds_10";
            var diamondsJackClass = "diamonds_jack";
            var diamondsQueenClass = "diamonds_queen";
            var diamondsKingClass = "diamonds_king";
            var diamondsAceClass = "diamonds_ace";

            function getPiece(cardClass) {
                var card = $("<div></div>");
                card.addClass("card");
                card.addClass(cardClass);
                return card;
            };

            //Iterate over the current set of matched elements
            return this.each(function() {

                var holder = $("<div></div>");
                holder.addClass("card_holder");

                for(var i = 0; i < cards.length; i++) {
                    if(cards[i] == "AS") {
                        holder.append(getPiece(spadesAceClass));
                    } else if(cards[i] == "2S") {
                        holder.append(getPiece(spades2Class));
                    } else if(cards[i] == "3S") {
                        holder.append(getPiece(spades3Class));
                    } else if(cards[i] == "4S") {
                        holder.append(getPiece(spades4Class));
                    } else if(cards[i] == "5S") {
                        holder.append(getPiece(spades5Class));
                    } else if(cards[i] == "6S") {
                        holder.append(getPiece(spades6Class));
                    } else if(cards[i] == "7S") {
                        holder.append(getPiece(spades7Class));
                    } else if(cards[i] == "8S") {
                        holder.append(getPiece(spades8Class));
                    } else if(cards[i] == "9S") {
                        holder.append(getPiece(spades9Class));
                    } else if(cards[i] == "10S") {
                        holder.append(getPiece(spades10Class));
                    } else if(cards[i] == "JS") {
                        holder.append(getPiece(spadesJackClass));
                    } else if(cards[i] == "QS") {
                        holder.append(getPiece(spadesQueenClass));
                    } else if(cards[i] == "KS") {
                        holder.append(getPiece(spadesKingClass));
                    } else if(cards[i] == "AC") {
                        holder.append(getPiece(clubsAceClass));
                    } else if(cards[i] == "2C") {
                        holder.append(getPiece(clubs2Class));
                    } else if(cards[i] == "3C") {
                        holder.append(getPiece(clubs3Class));
                    } else if(cards[i] == "4C") {
                        holder.append(getPiece(clubs4Class));
                    } else if(cards[i] == "5C") {
                        holder.append(getPiece(clubs5Class));
                    } else if(cards[i] == "6C") {
                        holder.append(getPiece(clubs6Class));
                    } else if(cards[i] == "7C") {
                        holder.append(getPiece(clubs7Class));
                    } else if(cards[i] == "8C") {
                        holder.append(getPiece(clubs8Class));
                    } else if(cards[i] == "9C") {
                        holder.append(getPiece(clubs9Class));
                    } else if(cards[i] == "10C") {
                        holder.append(getPiece(clubs10Class));
                    } else if(cards[i] == "JC") {
                        holder.append(getPiece(clubsJackClass));
                    } else if(cards[i] == "QC") {
                        holder.append(getPiece(clubsQueenClass));
                    } else if(cards[i] == "KC") {
                        holder.append(getPiece(heartsKingClass));
                    } else if(cards[i] == "AH") {
                        holder.append(getPiece(heartsAceClass));
                    } else if(cards[i] == "2H") {
                        holder.append(getPiece(hearts2Class));
                    } else if(cards[i] == "3H") {
                        holder.append(getPiece(hearts3Class));
                    } else if(cards[i] == "4H") {
                        holder.append(getPiece(hearts4Class));
                    } else if(cards[i] == "5H") {
                        holder.append(getPiece(hearts5Class));
                    } else if(cards[i] == "6H") {
                        holder.append(getPiece(hearts6Class));
                    } else if(cards[i] == "7H") {
                        holder.append(getPiece(hearts7Class));
                    } else if(cards[i] == "8H") {
                        holder.append(getPiece(hearts8Class));
                    } else if(cards[i] == "9H") {
                        holder.append(getPiece(hearts9Class));
                    } else if(cards[i] == "10H") {
                        holder.append(getPiece(hearts10Class));
                    } else if(cards[i] == "JH") {
                        holder.append(getPiece(heartsJackClass));
                    } else if(cards[i] == "QH") {
                        holder.append(getPiece(heartsQueenClass));
                    } else if(cards[i] == "KH") {
                        holder.append(getPiece(diamondsKingClass));
                    } else if(cards[i] == "AD") {
                        holder.append(getPiece(diamondsAceClass));
                    } else if(cards[i] == "2D") {
                        holder.append(getPiece(diamonds2Class));
                    } else if(cards[i] == "3D") {
                        holder.append(getPiece(diamonds3Class));
                    } else if(cards[i] == "4D") {
                        holder.append(getPiece(diamonds4Class));
                    } else if(cards[i] == "5D") {
                        holder.append(getPiece(diamonds5Class));
                    } else if(cards[i] == "6D") {
                        holder.append(getPiece(diamonds6Class));
                    } else if(cards[i] == "7D") {
                        holder.append(getPiece(diamonds7Class));
                    } else if(cards[i] == "8D") {
                        holder.append(getPiece(diamonds8Class));
                    } else if(cards[i] == "9D") {
                        holder.append(getPiece(diamonds9Class));
                    } else if(cards[i] == "10D") {
                        holder.append(getPiece(diamonds10Class));
                    } else if(cards[i] == "JD") {
                        holder.append(getPiece(diamondsJackClass));
                    } else if(cards[i] == "QD") {
                        holder.append(getPiece(diamondsQueenClass));
                    } else if(cards[i] == "KD") {
                        holder.append(getPiece(diamondsKingClass));
                    }
                }
                $(this).html(holder);
            });

        },

        checkersAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"checkers", states, time);
            });
        },

        chessAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"chess", states, time);
            });
        },

        goAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"go", states, time);
            });
        },

        xiangqiAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"xiangqi", states, time);
            });
        },

        shogiAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"shogi", states, time);
            });
        },

        othelloAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"othello", states, time);
            });
        },

        tictactoeAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"tictactoe", states, time);
            });
        },

        cardsAnimator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"cards", states, time);
            });
        },

        d6Animator: function(states, time) {
             //Iterate over the current set of matched elements
            return this.each(function() {
                $(this).generalAnimator($(this),"d6", states, time);
            });
        },

        generalAnimator: function(_parent, _func, _states, _time) {

            var parent = _parent;
            var func = _func;
            var states = _states;
            var time = _time;

            var cnt = 0;

            function update() {
                parent[func](states[cnt]);
                cnt++;
                if(cnt == states.length) {
                    cnt = 0;
                    setTimeout(function() {
                        start();
                    }, time);
                }
            }

            function start() {
                for(var i = 0; i < states.length; i++) {
                    setTimeout(function() {
                        update();
                    }, time + i * time);
                }
            }

            start();

        }


    });
})(jQuery);
