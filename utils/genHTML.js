function genHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
      
  <head>
    <!-- Boilerplate Metatags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
    <!-- Project Metatags -->
    <meta name="author" content="${data.author}">
    <meta name="application-name" content="${data.projName}">
    <meta name="description" content="${data.descript}">
    <meta name="keywords" content="${data.keyterms}">
      
    <!-- Title and Icon -->
    <title>${data.projName}</title>
    <link rel="icon" href="./assets/images/${data.icon}.ico" type="image/x-icon">
      
    <!-- My CSS  -->
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="./assets/css/style.css">
      
    <!-- My JS Script  -->
    <script src="./libs/main.js" type="module" defer></script>
  </head>
      
  <body>
  
    <!-- ==================== -->
    <!--      HEADER          -->
    <!-- ==================== -->
      
    <!-- ==================== -->
    <h1>${data.message}</h1>
    <!-- ==================== -->
  
  </body>
  </html>`;
}

module.exports = genHTML;
