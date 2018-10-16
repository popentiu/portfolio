<script type = "text/javascript">
          function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

          function startTimer() {
              setInterval(displayNextImage, 3000);
          }

          var images = [], x = -1;
          images[0] = "ASSETS/a1.png";
          images[1] = "ASSETS/a2.png";
          images[2] = "ASSETS/a3.png";
          images[3] = "ASSETS/a4.png";
          images[4] = "ASSETS/a5.png";
          images[5] = "ASSETS/a6.png";
      </script>