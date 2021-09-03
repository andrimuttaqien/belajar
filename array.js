// Contoh Array, bisa string, numeric, boolean
let array    =['Andri',1,true];
console.log(array.join('+'));

// Menampilkan isi array
// 1. length
let array    =['Andri',1,true];
for(let i=0; i < array.length; i++) {
    console.log('Array ke- '+ (i+1) + " : " + array[i]);
}

// Method pada javascript
// 2. join
let array    =['Andri',1,true];
console.log(array.join('+'));

// 3. push : menambahkan element array di akhir array
let array   =['Andri',1,true]
array.push('Hilman','Hendi');
console.log(array);

// 4. pop : kebalikan dari push, yaitu menghapus element array terakhir
let array   =['Andri',1,true];
array.pop();
console.log(array);

// 5. unshift dan shift, sama seperti push dan pop tapi mengambil dari depan
let array   =['Andri',1,true];
array.unshift('Indra');
array.shift();
console.log(array);

// 6. splice dan slice
// splice : array(IndexKe, mauDihapusBerapa, elementBaru1, elementBaruN......);
let array   =['Andri',1,true];
array.splice(1,1,'Tedi');
console.log(array.join('-'));

// slice : menghasilkan array baru dengan rumus (mengambil dimulai urutan ke-, dihapus dimulai urutan ke-)
let array1=['Andri',1,true,false,2];
let array2=array1.slice(1,4);
console.log(array2.join('+'));

// 7. Foreach forEach looping tidak mengembalikan return array
let nama    =['Andri',1,true];
nama.forEach(function(e) {
    console.log(e);
});
nama.forEach(function(e,i){
    console.log("Nama Mahasiswa ke - : "+(i+1)+" Adalah : "+e);
});

// 8. Map menghasilkan return array
let angka    =[1,2,3];
let arrayAngka   =angka.map(function(e){
    return e * 2;
});
console.log(arrayAngka.join('-'));

// 9. Sort
let angka       =[1,2,3,4,6,5];
angka.sort();
console.log(angka);

// 10 Filter  menghasilkan array
let angka1      =[1,2,3,4,5];
let angka2      =angka1.filter(function(e) {
    return e    < 5;
});
console.log(angka2.join('+'));

// 11 Find menemukan 1 nilai saja dan tidak mengembalikan array
let angka1      =[1,2,3,4,5];
let angka2      =angka1.find(function(e) {
    return e    > 1;
});
console.log(angka2); 

// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics