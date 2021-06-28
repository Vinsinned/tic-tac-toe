const gameboard = (() => {
    let array = ['x', 'o', 'x', 'x', 'x', 'o', 'o', 'x', 'x'];
    /*
    for (i = 0; i < array.length; i++) {
        getDivs[i].textContent = array[i];
    }
    */
})();

const players = (letter) => {
    const getDivs = document.querySelectorAll('.gameboard-display');
    let x = 0;
    let o = 0;
    getDivs.forEach((div) => {
        div.addEventListener('click', () => {
            if(x == o) {
                if (getDivs[div.id - 1].textContent == '') {
                    getDivs[div.id - 1].textContent = 'x';
                    x++;
                    checkWinner();
                } else if (getDivs[div.id - 1].textContent != '') {
                    console.log('It\'s already occupied!');
                }
            } else if (x > o) {
                if (getDivs[div.id - 1].textContent == '') {
                    getDivs[div.id - 1].textContent = 'o';
                    o++;
                    checkWinner();
                } else if (getDivs[div.id - 1].textContent != '') {
                    console.log('It\'s already occupied!');
                }
            } else if (o > x) {
                if (getDivs[div.id - 1].textContent == '') {
                    getDivs[div.id - 1].textContent = 'x';
                    x++;
                    checkWinner();
                } else if (getDivs[div.id - 1].textContent != '') {
                    console.log('It\'s already occupied!');
                }
            }
        })
    });
    function checkWinner() {
        //vertical Wins
        if (getDivs[9 - 1].textContent == 'x' && getDivs[6 -1].textContent == 'x' && getDivs[3 - 1].textContent == 'x') {
            console.log('Right Vertical Win');
        } else if (getDivs[2 -1].textContent == 'x' && getDivs[5 -1].textContent == 'x' && getDivs[8-1].textContent == 'x') {
            console.log('Middle Vertical Win');
        } else if (getDivs[1 - 1].textContent == 'x' && getDivs[4 - 1].textContent == 'x' && getDivs[7 - 1].textContent == 'x') {
            console.log('Left Vertical Win');
        //Horizontal Wins
        } else if (getDivs[1 - 1].textContent == 'x' && getDivs[2 - 1].textContent == 'x' && getDivs[3 - 1].textContent == 'x') {
            console.log('Upper Horizontal Win');
        } else if (getDivs[4 - 1].textContent == 'x' && getDivs[5 - 1].textContent == 'x' && getDivs[6 - 1].textContent == 'x') {
            console.log('Middle Horizontal Win');
        } else if (getDivs[7 - 1].textContent == 'x' && getDivs[8 - 1].textContent == 'x' && getDivs[9 - 1].textContent == 'x') {
            console.log('Lower Horizontal Win');
        //Diagonal Wins
        } else if (getDivs[1 - 1].textContent == 'x' && getDivs[5 - 1].textContent == 'x' && getDivs[9 - 1].textContent == 'x') {
            console.log('Upper Left to Bottom Right Diagonal Win');
        } else if (getDivs[7 - 1].textContent == 'x' && getDivs[5 - 1].textContent == 'x' && getDivs[3 - 1].textContent == 'x') {
            console.log('Bottom Left to Upper Right Diagonal Win');
        }
    }
}

const objectFlow = (() => {
    const getDivs = document.querySelectorAll('.gameboard-display');
    if (getDivs[9 - 1] == 'x' && getDivs[6 -1] == 'x' && getDivs[3 - 1] == 'x') {
        console.log('Win')
    }
})();

const protagonist = players('o');
const antagonist = players('x');