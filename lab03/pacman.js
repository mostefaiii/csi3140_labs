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


function randInt(max){
    return Math.floor(Math.random() * max);
}

function createGame(n){
    let board = new Array(n); 

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

console.log(createGame(10));
