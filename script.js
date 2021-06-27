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
                } else if (getDivs[div.id - 1].textContent != '') {
                    console.log('It\'s already occupied!');
                }
            } else if (x > o) {
                if (getDivs[div.id - 1].textContent == '') {
                    getDivs[div.id - 1].textContent = 'o';
                    o++;
                } else if (getDivs[div.id - 1].textContent != '') {
                    console.log('It\'s already occupied!');
                }
            } else if (o > x) {
                if (getDivs[div.id - 1].textContent == '') {
                    getDivs[div.id - 1].textContent = 'x';
                    x++;
                    console.log(x);
                    console.log(o);
                } else if (getDivs[div.id - 1].textContent != '') {
                    console.log('It\'s already occupied!');
                }
            }
        })
    });
}

const objectFlow = (() => {
    const getDivs = document.querySelectorAll('.gameboard-display');
    if (getDivs[9 - 1] == 'x' && getDivs[6 -1] == 'x' && getDivs[3 - 1] == 'x') [
        console.log('Win')
    ]
})();

const protagonist = players('o');
const antagonist = players('x');