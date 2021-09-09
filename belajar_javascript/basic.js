alert("Hello World");
console.log("Helo World");

let x=10;
console.log(x);

let nama    = prompt("Masukan Nama : ");
alert(nama);

let tanya   = confirm("Yakin ? ");
if (tanya===true) {
    alert(tanya);
} else {
    alert(tanya);
}

alert("Selamat Datang");
let lagi =true;
while(lagi===true) {
    let nama =prompt("Masukan Nama : ");
    alert("Halo " + nama);
    lagi	=confirm("Coba Lagi ? ");
}
alert("Terima Kasih");

for (let i = 1; i <= 5; i++) {
    alert(i);
}
alert('Terima Kasih');

let angka = prompt("Masukan Angka : ");
if (angka % 2 === 0) {
    alert("Bilangan Genap");
} else {
    alert("Bilangan Ganjil");
}

let lagi = true;
while (lagi) {
    let angka = prompt("Masukan Angka");
    if (angka % 2 === 0) {
        alert("Bilangan Genap");
    } else {
        alert("Bilangan Ganjil");
    }
    lagi = confirm("Main Lagi ? ");
}
alert("Terima Kasih");

let nilaiAwal = 1;
while (nilaiAwal <= 10) {
    console.log("Angkot No. " + nilaiAwal + " Beroperasi Dengan Baik \n");
    nilaiAwal++;
}

        