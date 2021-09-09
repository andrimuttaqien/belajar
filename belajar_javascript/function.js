// User Defined Function
// Built in Function 
// Function Declaration and Function Statement
// Parameter and Agrument
// Return Value
// Scope
// Refactoring
// Hoisting
// Closure
// Recursion
// Input -> Function -> Output (Return Value)
// Function baik hanya mengerjakan 1 hal saja
// Kelebihan Function
// - Blok kode yang dibuat untuk melakukan tugas spesifik
// - Dapat dipanggil berulang kali
// - Memudahkan penulusuran kode
// - Dapat digunakan kembali (reusablelity)
// Sudo Variable Argument

let a = parseInt(prompt("Masukan nilai ke-1 : "));
let b = parseInt(prompt("Masukan nilai ke-2 : "));

function hitung(a, b) {
    let c = a + b;
    return c;
}
c = hitung(a, b);
alert(c);
console.log(hitung(1, 2));

function hitungKubus(a, b) {
    let volumeKubusA;
    let volumeKubusB
    let total;
    volumeKubusA = a * a * a;
    volumeKubusB = b * b * b;
    total = volumeKubusA + volumeKubusB;
    return total;
}
console.log(hitungKubus(8, 3));

let kubusA = parseInt(prompt("Masukan Jumlah Sisi Kubus A : "));
let kubusB = parseInt(prompt("Masukan Jumlah Sisi Kubus B : "));

let totalKubusA = hitungVolumeKubusA(kubusA);

function hitungVolumeKubusA(kubusA) {
    let volumeKubusA = kubusA * kubusA * kubusA;
    return volumeKubusA;
}

let totalKubusB = hitungVolumeKubusB(kubusB);

function hitungVolumeKubusB(kubusB) {
    let volumeKubusB = kubusB * kubusB * kubusB;
    return volumeKubusB;
}

totalSemuaKubus = hitungSemuaVolumeKubus(totalKubusA, totalKubusB);

function hitungSemuaVolumeKubus(totalKubusA, totalKubusB) {
    let totalSemuaKubus = totalKubusA + totalKubusB;
    return totalSemuaKubus;
}
console.log(hitungVolumeKubusA(kubusA));
console.log(hitungVolumeKubusB(kubusB));
let totalSemuaKubus = hitungVolumeKubusA(kubusA) + hitungVolumeKubusB(kubusB);
alert(totalSemuaKubus);
function tambah() {
var hasil = 0;
for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
}
return hasil;
}
var hasil = tambah(1, 2, 3, 4);
console.log(hasil);