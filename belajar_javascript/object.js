// Membuat Object Pada Javascript
// - Object Literal
// - Function Declaration
// - Constructor Function (keyword new)
// - object.create();

// - Objcet Literal, buat key nya beulang-ulang
let mhsObjcet1={
    nama    : 'Andri',
    umur    : 31,
    menikah : true
}
let mhsObjcet2={
    nama    : 'Andri',
    umur    : 31,
    menikah : true
}

// - Function Declaration, buat key nya 1 kali
function objectMhs (nama,umur,menikah) {
    let mhs     ={};
    mhs.nama    =nama;
    mhs.umur    =umur;
    mhs.menikah =menikah;
    return mhs;
}
let tampilMhsDeclaration1 =objectMhs("Andri", 31, true);
let tampilMhsDeclaration2 =objectMhs("Indra", 41, false);

// - Constructor Functon (keyword new) : function yang khusus untuk membuat object
function Mahasiswa(nama, umur, menikah) {
    this.nama   =nama;
    this.umur   =umur;
    this.menikah=menikah;
}
let tampilMhsConstrutor  =new Mahasiswa('Andri', 31, true); // wajib menggunakan new

// Konsep this adalah keyword spesial yang didefinisikan oleh function
// console.log(this); // isi di dalam this adalah object windows atau this = windows
// this mengembalikan object global



// Video Object 3 : this.
// Cara Membuat Object
// 1. function declaration
// function hallo() {
//     console.log(this);
//     console.log('Halo');
// }
// this.hallo ();

// 2. function literal
// function hallo(isi) {
//     let pesan={};
//     pesan.isi   =isi;
//     return pesan;
// }
// let tampilkanPesan  =hallo("Selamat Datang");
// let object={nama:'Andri',umur:31, menikah:true};
// object.halo=function() {
//     console.log(this);
//     console.log('Halo');
// }
// object.halo();

// 3. Construktor Function
// function halloConstructor(isi) {
//     console.log(this);
//     this.isi=isi;
// }
// let tampilkanPesanConstructor   =new halloConstructor("Selamat Datang");