
let ankhButton = document.getElementById('ankh-button');
let ankh1 = document.getElementById('a1');
let ankh2 = document.getElementById('a2');
let ankh3 = document.getElementById('a3');
let ankh4 = document.getElementById('a4');
let ankh5 = document.getElementById('a5');

const rgbNumber = () => {
    let n = Math.floor(Math.random() * 256);
    return n
}

const generateAnkh = () => {
    ankh1.style.color = 'rgb(' + rgbNumber() + ',' + rgbNumber() + ',' + rgbNumber() + ')';
    let x = Math.floor(Math.random() * 2);
    if (x === 0) {
        ankh1.style.visibility = 'visible';
    } else {
        ankh1.style.visibility = 'hidden';
    }
    ankh2.style.color = 'rgb(' + rgbNumber() + ',' + rgbNumber() + ',' + rgbNumber() + ')';
    let y = Math.floor(Math.random() * 2);
    if (y === 0) {
        ankh2.style.visibility = 'visible';
    } else {
        ankh2.style.visibility = 'hidden';
    }
    ankh3.style.color = 'rgb(' + rgbNumber() + ',' + rgbNumber() + ',' + rgbNumber() + ')';
    let w = Math.floor(Math.random() * 2);
    if (w === 0) {
        ankh3.style.visibility = 'visible';
    } else {
        ankh3.style.visibility = 'hidden';
    }
    ankh4.style.color = 'rgb(' + rgbNumber() + ',' + rgbNumber() + ',' + rgbNumber() + ')';
    let z = Math.floor(Math.random() * 2);
    if (z === 0) {
        ankh4.style.visibility = 'visible';
    } else {
        ankh4.style.visibility = 'hidden';
    }
    ankh5.style.color = 'rgb(' + rgbNumber() + ',' + rgbNumber() + ',' + rgbNumber() + ')';
    let q = Math.floor(Math.random() * 2);
    if (q === 0) {
        ankh5.style.visibility = 'visible';
    } else {
        ankh5.style.visibility = 'hidden';
    }
}

ankhButton.onclick = generateAnkh
