// let sopir   ="Sandika Galik";
// let trayek  ="Cicaheum - Cibiru";
// let penumpang   =0;
// let kas     =0;

// Object Constructor Function
function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir      =sopir;
    this.trayek     =trayek;
    this.penumpang  =penumpang;
    this.kas        =kas;
    this.penumpangNaik  =function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun =function(namaPenumpang, ongkos) {
        if(this.penumpang.length ===0) {
            alert("Angkot masih kosong");
            return false;
        } else {
            for(let i=0; i < this.penumpang.length; i++) {
                if(this.penumpang[i]===namaPenumpang) {
                    this.penumpang[i]=undefined;
                    this.kas += ongkos;
                    return this.penumpang;
                }
            }
        }
    }
}
let Angkot1 =new Angkot("Andri", ['Cicaheum','Cibiru'], [], 0);