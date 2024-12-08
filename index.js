function galerie() {
    document.head.innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galerie</title>
    <link rel="stylesheet" href="broadcasting.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">`;
    document.body.innerHTML = `
     <div style="background-color: green; color: aliceblue; border-radius: 30px 30px 0px 0px;">
          <h3 style="text-align: center;">
               <marquee behavior="slide" scrollamount="100" loop="300" direction="left" scrolldelay="200"
                    style="text-align: center;">Collège Les Saints Innocents</marquee>
               <marquee behavior="slide" scrollamount="80" loop="300" direction="right" scrolldelay="200">CLSI</marquee>
               <marquee behavior="slide" scrollamount="120" loop="2000" direction="down" scrolldelay="200"
                    style="text-align: center;">CLSI</marquee>
          </h3>
     </div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="">
                         <div
                              style="background-color: rgb(70, 247, 54); color: aliceblue; border: 1px solid rgb(194, 199, 199); padding: 15px; border-radius: 10px 20px 10px 20px;">
                              Collège Les Saints Innocents</div>
                    </a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                         <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="">Accueil</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="" style="cursor: pointer;">À
                                   propos</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" href="" style="cursor: pointer;">Contact</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" onclick="galerie()" style="cursor: pointer;">Galerie</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" href="" style="cursor: pointer;">CLSI En Ligne</a>
                         </li>
                    </ul>
                    <form class="d-flex" role="search">
                         <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
                         <button class="btn btn-outline-success" type="submit">Recherche</button>
                    </form>
               </div>
          </div>
     </nav>

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="clsi2.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi3.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi4.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi5.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi7.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi8.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi10.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi11.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
      <div class="carousel-item">
        <img src="clsi12.jpg" class="d-block w-100" alt="..." style="width: 50%; height: 50%;">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  <div style="background-color: rgb(73, 68, 68); padding: 5px; border-radius: 0px 0px 15px 15px;">
          <div>
               <h4
                    style="float: left; background-color: rgb(235, 85, 85); color: aliceblue; padding: 5px; border-radius: 30px; margin-top: 5px;">
                    Dir. Père Wilky Avril</h4>
               <h6
                    style="float: right; background-color: rgb(28, 154, 158); color: rgb(255, 255, 255); padding: 5px; border-radius: 30px; margin-top: 5px;">
                    <a href="" style="text-decoration: none; color: white;">CLSI En Ligne</a>
               </h6>
          </div>
          <br>
          <div class="container" style="color: blanchedalmond; margin: 0%;">
               <h2 style="text-align: center;"><span style="color: aqua;">Co</span><span
                         style="color: chartreuse;">llè</span><span style="color: rgb(235, 195, 20);">ge</span> <span
                         style="color: rgb(255, 0, 170);">Les</span> <span
                         style="color: rgb(21, 238, 21);">Sai</span><span style="color: gold;">nts</span> <span
                         style="color: rgba(204, 247, 15, 0.534);">In</span><span
                         style="color: rgb(15, 245, 138);">no</span><span style="color: bisque;">c</span><span
                         style="color: rgb(206, 28, 241);">e</span><span style="color: aliceblue;">n</span><span
                         style="color: chartreuse;">t</span><span style="color: cornflowerblue;">s</span></h2>

          </div>
     </div>
    <script src="index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>`
  }