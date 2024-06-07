//functions:
//createGame(n)
/* needs
* 1 Pacman ("C")
* 1 Ghost ("^")
* 1 fruit ("@")
* m pellets (".")

returns array of size n with the following^
smallest game of 1d pacman would be size 4 array then?
want to cap it at that

```javascript
[ ".", ".", ".", ".", "C", ".", ".", "@", ".", "^." ]
```

In this case, you are showing both the ghost (^) and the pellet (.)
on the board tile.  In future steps you might just show the ghost
as it would take prescendence.

*/

//global vars:

//following vars are for processmove logic
isFruit = false; //check if pac-man is currently fruiting
pacmanIndex = 0; //pac-man's current index
boardSize = 0; //size of the game board
board = []; //board itself

function randInt(max){
    return Math.floor(Math.random() * max);
}

function createGame(n){
    board = new Array(n); 
    boardSize = n;

    const elems = ["C","@","^"]; //elements to be added to board first

    let whichelem = 0; //to track which element we're on

    while (whichelem <= 2) { //while not all elements have been added yet 
        let place = randInt(n); //generate a position for element 
        
        //TEST
        console.log("Putting " + elems[whichelem] + " in board");
        console.log("at position " + place);
        console.log("board currently at " + place + ": " + board[place]);

        if (board[place] == null) { //if it's a free spot
            //TEST
            console.log("Free spot!")

            board[place] = elems[whichelem]; //add the element we're on to the board
            
            if (whichelem==0){ //if we're placing pac-man
                pacmanIndex = place; //update pac-man's index
            }

            //TEST
            console.log("Placed " + elems[whichelem] +  " in spot " + place); 
            console.log("Next elem!");
            whichelem++; //next element to add to array            
        }
    } //end while
    //now board has pac-man, ghost, and fruit in it

    //loop to add pellets to remaining positions in board
    for (let i = 0; i < n; i++) { //add to board
        if (board[i]==null){
            board[i] = "."; //add pellet
        }
    }//end for
    //now the board should be full!
    return board;
}

//purely moves pac-man onto the tile to its left, becoming roommates with its inhabitor
function moveLeft(game){ 
    //cases: 
    //pac-man is in da middle/end
    //just move him
    if (pacmanIndex<(boardSize) && pacmanIndex!=0) { 
        left = board[pacmanIndex - 1];

        if (left!=" ") { //this is because i'm using concat--if pac-man is on a tile by himself i want it to show "C" and not " C"
            board[pacmanIndex - 1] = left.concat("C"); //fuse em!
            board[pacmanIndex] = " "; //empty pacman's spot
            pacmanIndex--; //update his index
        }else { //empty tile
            board[pacmanIndex - 1] = "C";
            board[pacmanIndex] = " ";
            pacmanIndex--;
        }
    }else{
        left = board[boardSize-1]; //furthest right element
        if (left!=" ") {
            board[boardSize - 1 ] = left.concat("C");
            board[pacmanIndex] = " ";
            pacmanIndex = boardSize - 1;
        }else{
            left = "C";
            board[pacmanIndex] = " ";
            pacmanIndex = boardSize - 1;
        }
    }
    //else: pac-man is at da start
    //move him to da end
}

function moveRight(game){

}

//exists to figure out the points system
function processMove(game){

}

createGame(10);
console.log("the board:" + board);
moveRight(board);
console.log(board);
moveRight(board);
console.log(board);