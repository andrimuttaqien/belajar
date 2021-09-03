// tampung array untuk menampung penumpang
let penumpang    =[];
// buat fungsi naik / turun penumpang
let tambahPenumpang =function (namaPenumpang, penumpang) {
    // jika penumpang angkot kosong
    if (penumpang.length < 1) 
    {
        // tambah penumpang di array
        penumpang.push(namaPenumpang);
        // kembalikan nilai penumpang
        return penumpang;
    }
    // jika penumpang angkot tidak kosong 
    else 
    {
        // cek apakah ada kursi kosong
        for(let i=0; i < penumpang.length; i++) {
            // jika ada kursi kosong /undefined
            if(penumpang[i]=== undefined) 
            {
                // tambah penumpang di array
                penumpang[i]    =namaPenumpang;
                //kembalikan nilai penumpang
                return penumpang;
            }
            // Jika ada nama penumpang yang sama 
            else if (penumpang[1]===namaPenumpang) 
            {
                console.log('Nama Penumpang : '+namaPenumpang+' Sudah Ada');
                return penumpang;
            }
            // Jika tidak ada kursi kosong dan nama penumpang tidak ada yang sama
            else if ( i === (penumpang.length -1) ){
                // tambah penumpang di array
                penumpang.push(namaPenumpang);
                // kembalikan nilai penumpang
                return penumpang;
            }
        }
    }
}
// fungsi hapus penumpang function (element, nomor urut array)
let hapusPenumpang  =function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if(penumpang.length < 1) 
    {
        // tampilkan pesan angkot kosong
        console.log('Angkot Kosong !!!');
        return penumpang;
    } 
    // jika angkot tidak kosong 
    else 
    {
        // telusuri nama penumpang ada  / tidak
        for(let i=0; i < penumpang.length; i++) 
        {
            // jika penumpang ada 
            if(penumpang[i]===namaPenumpang) 
            {
                penumpang[i]=undefined;
                return penumpang
            }
            // jika nama penumpang tidak ada di dalam angkot
            else if (i===(penumpang.length -1))
            {
                //tampilkan pesan nama penumpang tidak ada di angkot
                console.log('Tidak Ada Penumpang Dengan Nama : '+namaPenumpang+' di angkot');
                return penumpang;
            }
        }
    }
}
