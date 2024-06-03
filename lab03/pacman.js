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

function createGame(n){
    const board = []; 

    //an idea here, so that the loop knows to add these elements no matter what?
    paccnt = 1;
    ghostcnt = 1;
    fruitcnt = 1;

    //orrr i could do this another, less stupid way! 
    //random placement of these 3 things
    //before everything else
    //for loop afterwards to do a check of what doesn't already have smth on it
    //make a sense?
    //ok


    for (let i = 0; i < n; i++) { //add to board
    
    }
}
