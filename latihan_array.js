// Contoh Array, bisa string, numeric, boolean
// let array    =['Andri',1,true];
// console.log(array);

// Menampilkan isi array
// 1. length
// let array    =['Andri',1,true];
// for(let i=0; i < array.length; i++) {
//     console.log('Array ke- '+ (i+1) + " : " + array[i]);
// }

// Method pada javascript
// 2. join
// let array    =['Andri',1,true];
// console.log(array.join('+'));

// 3. push : menambahkan element array di akhir array
// let array   =['Andri',1,true]
// array.push('Hilman','Hendi');
// console.log(array);

// 4. pop : kebalikan dari push, yaitu menghapus element array terakhir
// let array   =['Andri',1,true];
// array.pop();
// console.log(array);

// 5. unshift dan shift, sama seperti push dan pop tapi mengambil dari depan
// let array   =['Andri',1,true];
// array.unshift('Indra');
// array.shift();
// console.log(array);

// 6. splice dan slice
// splice : array(IndexKe, mauDihapusBerapa, elementBaru1, elementBaruN......);
// let array   =['Andri',1,true];
// array.splice(1,1,'Tedi');
// console.log(array.join('-'));
// slice : menghasilkan array baru dengan rumus (dimulai urutan ke-, dihapus dimulai urutan ke-)
// let array1=['Andri',1,true,false,2];
// let array2=array1.slice(1,4);
// console.log(array2.join('+'));

// 7. Foreach dan Map
// let nama    =['Andri',1,true];
// nama.forEach(function(e) {
//     console.log(e);
// });
// nama.forEach(function(e,i){
//     console.log("Nama Mahasiswa ke - : "+(i+1)+" Adalah : "+e);
// });
// Map menghasilkan return array
let angka    =[1,2,3];
var arrayAngka   =angka.map(function(e){
    return e * 2;
});
console.log(arrayAngka.join('-'));

// 8. Sort dan Find
// let angka       =[1,2,3];
// angka.sort();
// console.log(angka);
// let angka       =[1,2,3];
// let cari        =angka.find();
// console.log(angka);
// // https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics