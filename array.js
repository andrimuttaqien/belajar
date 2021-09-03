Manipulasi Array
let nama    =['Andri','Zen','Landi','Hendi'];
let angka   =[1,2,3,6,4,5];
Menambahkan Array
let array=['a',1,true];
console.log(array[0]);

Menghapus Array
let array=['a',1,true];
array[1]    =undefined;
console.log(array);

Menampilkan isi array
1. length
let array=['Andri','Zen','Landi'];
for(i=0; i < array.length; i++) {
    console.log('Mahasiswa ke- '+ (i+1) + " : " + array[i]);
}

Method pada javascript
2. join
3. push : menambahkan element array di akhir array
array.push('Hilman','Hendi');
4. pop : kebalikan dari push, yaitu menghapus element array terakhir
array.pop();
5. unshift dan shift, sama seperti push dan pop tapi mengambil dari depan
array.unshift('Indra');
array.shift();
6. splice dan slice
array(IndexKe, mauDihapusBerapa, elementBaru1, elementBaruN......);
array.splice(1,0,'Tedi');
array.splice(1,2,'Sandika','Fitri');
let array2=array.slice(1,3)
console.log(array2.join('-'));
7. Foreach dan Map
nama.forEach(function(e) {
    console.log(e);
});
nama.forEach(function(e,i){
    console.log("Nama Mahasiswa ke - : "+(i+1)+" Adalah : "+e);
});
var arrayAngka   =angka.map(function(e){
    return e * 2;
});
console.log(arrayAngka.join('-'));
8. Sort dan Find
angka.sort();
console.log(angka);
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics