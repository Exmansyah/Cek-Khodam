const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container")

function cekKhodam(event){
  event.preventDefault();
  let nama = $('#search').val();
  if (nama == '') {
    alert("NAMA TIDAK BOLEH KOSONG!");
    document.getElementById('deskripsiKodam').innerHTML = ''
    document.getElementById('result').innerHTML = ''
  }else {
    container[0].style.filter = "blur(8px)"
    loaders.style.display = "block"
    setTimeout(() => {
      
    
    let status = [
      'isi',
      'kosong'
      ];
    const randomStatus = Math.floor(Math.random() * status.length);
    if (randomStatus === 1) {
      document.getElementById('deskripsiKodam').innerHTML = ''
    }
    if (randomStatus == 0) {
      let khodam = [
        'Kulit Pisang',
        'Sigit Rendang',
        'Burung Beo',
        'Sendal Jepit'
        ];
        const random = Math.floor(Math.random() * khodam.length);
        $('#result').html(`${nama}  -  Khodam kamu  ${khodam[random]}`);
        $('#search').val('');
        if (random === 0) {
          document.getElementById('deskripsiKodam').innerHTML = "Dikabarkan orang yang mempunyai kodam ini memliki kulit kuning seperti tai"
         }else if (random === 1) {
          document.getElementById('deskripsiKodam').innerHTML = "Larilah sejauh mungkin karena entitas satu ini sangat kuat dan dapat membahayakan peternakan warga"
         }else if (random === 2) {
          document.getElementById('deskripsiKodam').innerHTML = "Jika bertemu Khodam ini tangkap lalu hitamkan!"
         }else if (random === 3) {
           document.getElementById('deskripsiKodam').innerHTML = 'Khodam ini bersemayam hampir disemua orang, pengguna khodam ini biasanya wibu dan pengangguran akut!'
         }
    }else {
        $('#result').html(`${nama}  -  Kamu Tidak Memiliki Khodam Karena Sering Mengoc*k:)`);
        $('#search').val('');
        $('#deskripsiKodam').val('');
    }
    container[0].style.filter = "none"
    loaders.style.display = 'none'
    }, 1000);
  }
}

$(document).ready(function () {
  $('#btn-search').click(cekKhodam)
});
