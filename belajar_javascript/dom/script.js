// DOM Selection
// # : id 
// . : class 
// document.getElementById() => mengembalikan 1 bundle element
// const judul =document.getElementById('judul');
// judul.style.color           ='red';
// judul.style.backgroundColor ='#cccc'; 
// judul.innerHTML ='Andri';

// document.getElemetsByTag()    => mengembalikan HTMLCollections
// const p =document.getElementsByTagName('p');
// p[0].style.backgroundColor  ='lightblue';
// for (let i=0; i < p.length; i++) {
//     p[i].style.backgroundColor ='lightblue';
// } 
// const h1 =document.getElementsByTagName('h1')[0];
// h1.style.fontSize   ='30px';

// document.getElemetsByClassName()    => mengembalikan HTMLCollections
// const p1    =document.getElementsByClassName('p1');
// p1[0].innerHTML ='Ini Diubah dari Javascript';

// document.querySelector() => selector css, menghasilkan element
// const p4    =document.querySelector('#b p');
// p4.style.color  ='green';
// const li2   =document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor   ='orange';

// document.querySelectorAll()
// const p =document.querySelectorAll('p');
// for (let i=0; i < p.length; i++) {
//     p[i].style.backgroundColor  ='green';
// }

const sectionB  =document.getElementById('b');
const p =sectionB.querySelector('p');
p.style.backgroundColor ='lightblue';