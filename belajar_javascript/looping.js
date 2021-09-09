let angka   =parseInt(prompt("Masukan Angka : \n (harus angka)"));
switch(angka) {
    case 1:
        alert("Anda Memasukan Angkat " +angka);
        break;
    default:
        alert("Anda Memasukan Angka : ");
        break;
}

let jumlahAngkot    = 10;
let angkotBerjalan  = 4;
let angkot          = 1;

for (angkot; angkot <= jumlahAngkot; angkot++) {
    if (angkot <= angkotBerjalan) {
        console.log("Angkot No. " + angkot + " Berjalan dengan Baik");
    } else if ((angkot === 5) || (angkot === 8) || (angkot === 10)) {
        console.log("Angkot No. " + angkot + " Lembur");
    } else {
        console.log("Angkot No. " + angkot + " Tidak Berjalan dengan Baik");
    }
}


while (angkot <= angkotBerjalan) {
    console.log("Angkot No. " + angkot + " Berjalan dengan baik");
    angkot++;
}

for (angkot = angkotBerjalan + 1; angkot <= jumlahAngkot; angkot++) {
    console.log("Angkot No. " + angkot + " Tidak Berjalan dengan baik");
}