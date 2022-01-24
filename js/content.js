$(document).ready(function () {
  const warnaKaos = [
    "COKLAT",
    "HITAM",
    "GREY",
    "HIJAU",
    "KUNING NEON",
    "MERAH MARON",
    "NAVY",
    "PUTIH",
    "ORANGE",
    "PINK",
    "SKY BLUE",
    "MERAH",
    "ROYAL BLUE",
    "KUNING",
    "TOSCA",
    "VIOLET",
    "NAVY MISTY",
    "HITAM MISTY",
    "GREY MISTY",
    "NAVY POLKA",
    "MERAH MISTY",
    "HITAM POLKA",
    "MERAH POLKA",
    "PUTIH POLKA",
  ];

  var jenisJersey = "premium";
  for (let i = 1; i < 25; i++) {
    switch (i) {
      case 17:
      case 18:
      case 19:
      case 20:
        var jenisJersey = "misty";
        break;
      case 21:
      case 22:
      case 23:
      case 24:
        var jenisJersey = "polka";
        break;
    }
    $(".portfolio-items").append(
      `<div class="col-sm-6 col-md-4 ` +
        jenisJersey +
        `">
            <div class="portfolio-item">
              <div class="hover-bg"> <a href="img/portfolio/bigs-` +
        i +
        `.jp2" title="jersey` +
        i +
        `" data-lightbox-gallery="gallery1">
                  <div class="hover-text">
                    <h4>` +
        warnaKaos[i] +
        `</h4>
                  </div>
                  <img src="img/portfolio/bigs-` +
        i +
        `.jp2" class="img-responsive" alt="Coklat">
                </a></div>
            </div>
          </div>`
    );
    var jenisJersey = "premium";
  }
});
