
let ankhButton = document.getElementById('ankh-button');
let ankh1 = document.getElementById('a1');
let ankh2 = document.getElementById('a2');
let ankh3 = document.getElementById('a3');
let ankh4 = document.getElementById('a4');
let ankh5 = document.getElementById('a5');


const rgbGenerator = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return rgb(r, g, b)
}

const visible = () => {
    let x = Math.floor(Math.random() * 2);
    if (x === 0) {
        let y = 'visible'
    } else {
        let y = 'hidden'
    }
    return y
}

const generateAnkh = () => {
    ankh1.target.style.color = rgbGenerator;
    ankh1.target.style.visibility = visible;

}


ankhButton.onclick = generateAnkh
