document.addEventListener("DOMContentLoaded", function() {
  var footer = document.createElement("footer");
  
    footer.innerHTML = `
      <nav>
        <p>
          <a href="https://webpages.charlotte.edu/fkidwai1/" target="_blank">CLT Home</a> | 
          <a href="https://github.com/fkidwai" target="_blank">GitHub</a> | 
          <a href="https://github.com/fkidwai/fkidwai.github.io" target="_blank">GitHub.io</a> | 
          <a href="https://github.com/fkidwai/fkidwai.github.io" target="_blank">Course.io</a> | 
          <a href="https://www.freecodecamp.org/fkidwai" target="_blank">freeCodeCamp</a> | 
          <a href="https://www.codecademy.com/profiles/fkidwai1" target="_blank">Codeacademy</a> | 
          <a href="https://www.linkedin.com/in/fawazullah-kidwai/" target="_blank">LinkdIn</a>
        </p>
      </nav>
      <p>
        Designed by 
        <a href="patelshardware.com">Krafty Kidwai Design</a> &copy;2023
      </p>
      <p class="valid">
      <a href="https://validator.w3.org/check?uri=referer">
      <img src="images/W3C_html5.jpg" width="88" height="31" alt="Validate webpage HTML.">
  </a>
  <a href="https://jigsaw.w3.org/css-validator/check/referer">
      <img src="images/W3C_css.jpg" width="88" height="31" alt="Validate webpage CSS.">
  </a>
      </p>
    `;
  
    document.body.appendChild(footer);
});  