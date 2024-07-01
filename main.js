$(document).ready(function () {
  $('#btn-search').click(function(event) {
    event.preventDefault();
    
    const loaders = document.getElementById("loaders");
    const container = document.querySelector(".container");
    const nama = $('#search').val().trim();
    
    if (nama === '') {
      alert("Nama tidak boleh kosong!");
      return;
    }
    
    if (nama.toLowerCase() === "gofar") {
      container.style.filter = "blur(8px)";
      loaders.style.display = "block";
      
      setTimeout(() => {
        $('#result').html(`${nama} - Orang ini tidak memiliki khodam tetapi dia memiliki Allah yang maha kuasa. ALLAHHUAKBAR! ( Awokawkk ga boleh pake nama develepor)🤣`);
        document.getElementById('deskripsiKodam').innerHTML = '';
        $('#search').val('');
        
        container.style.filter = "none";
        loaders.style.display = 'none';
      }, 1000);
      
      return;
    }
    
    container.style.filter = "blur(8px)";
    loaders.style.display = "block";
    
    setTimeout(() => {
      let status = ['isi', 'kosong'];
      const randomStatus = Math.floor(Math.random() * status.length);
      
      if (randomStatus === 1) {
        document.getElementById('deskripsiKodam').innerHTML = '';
      } else {
        let khodam = ['Kulit Pisang', 'Sigit Rendang', 'Burung Beo', 'Sendal Jepit'];
        const random = Math.floor(Math.random() * khodam.length);
        
        $('#result').html(`${nama} - Khodam kamu ${khodam[random]}`);
        
        switch(random) {
          case 0:
            document.getElementById('deskripsiKodam').innerHTML = "Dikabarkan orang yang mempunyai kodam ini memiliki kulit kuning seperti tai";
            break;
          case 1:
            document.getElementById('deskripsiKodam').innerHTML = "Larilah sejauh mungkin karena entitas satu ini sangat kuat dan dapat membahayakan peternakan warga";
            break;
          case 2:
            document.getElementById('deskripsiKodam').innerHTML = "Jika bertemu Khodam ini, tangkap lalu hitamkan!";
            break;
          case 3:
            document.getElementById('deskripsiKodam').innerHTML = "Khodam ini bersemayam hampir disemua orang, pengguna khodam ini biasanya wibu dan pengangguran akut!";
            break;
          default:
            break;
        }
      }
      
      container.style.filter = "none";
      loaders.style.display = 'none';
    }, 1000);
  });
});