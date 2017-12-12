// smoothScroll
var posY  = 0;
var jarak = 5;

function smoothScroll(id){
  var target = document.getElementById(id).offsetTop; //jarak antara atas dan div(jarak antara parent element dan div nya)

  var scrollAnimate = setTimeout(function(){
                        smoothScroll(id);
                      }, 5); // function, waktu dalam milisecond

posY = posY + jarak;

if(posY >= target){
  clearTimeout(scrollAnimate);
  posY = 0;
}else{
  window.scroll(0, posY) // horizontal, vertikal
};
  return false
}
// Fungsi validasi formular

function validasi(form){
  var lolos = true;
  var errorText = '';

  for(i=0; i<3; i++){
  if(form[i].value.trim().length <= 0){

    switch (i) {
      case 0:
        errorText = 'Nama';
        break;

      case 1:
        errorText = 'Email';
        break;

      case 2:
        errorText = 'Pesan';
        break;
      default:

    }

    // kalau belum ada error (gak ngelakuin 2x)
    if(form[i].nextElementSibling.className != 'error'){
      form[i].style.borderColor = 'rgb(38, 186, 49)';
      form[i].insertAdjacentHTML('afterend',"<div class='error'>"+ errorText + " harus diisi </div>");
    };

    lolos = false;

  }else{
    // sebelumnya sudah ada error, lalu hapus tulisan error
    if(form[i].nextElementSibling.className != 'error'){
      form[i].style.borderColor = '#df0024;'
      form[i].nextElementSibling.remove();
    };
  }
  }//end for
  return lolos;
}

// Ganti Gambar (Galleri)

var target_gambar = document.getElementById('target_gambar');
var array_gambar  = document.getElementById('menu_lain').children;
var no_sekarang   = 0;

function ganti_gambar(gambar){
  target_gambar.src = gambar.getAttribute('src');
}

function previous(){
  no_sekarang = no_sekarang - 1;
  if(no_sekarang < 0){
    no_sekarang = 2;
  }
  target_gambar.src = array_gambar[no_sekarang].getAttribute('src');
}

function next(){
  no_sekarang = no_sekarang + 1;
  if(no_sekarang > 2){
    no_sekarang = 0;
  }
  target_gambar.src = array_gambar[no_sekarang].getAttribute('src');
}
