
/* 
Render 3
Render 2
SPOILER_beamy_render
SPOILER_blastrender3
SPOILER_mk_render
SPOILER_Logo_Crimson_RZRVarient
Velvet
Logo_Crimson_Halloween_(Damaged)
unknown3
*/

function nextSlide(n){
    var get = document.getElementById('slideshow_main');
    console.log(get);
    if (get.src.match("images/blue_jay.jpg")){
        get.src = "images/cardinal.jpg";
        console.log("Image 2");
    }
    else if (get.src.match("images/cardinal.jpg"))
    {
        get.src = "images/falcon.avif";
        console.log("Image 3");
    }
    else if (get.src.match("images/falcon.avif"))
    {
        get.src = "images/ostrich.jpg";
        console.log("Image 3");
    }
    else if (get.src.match("images/ostrich.jpg"))
    {
        get.src = "images/owl.webp";
        console.log("Image 3");
    }
    else if (get.src.match("images/owl.webp"))
    {
        get.src = "images/peacock.jpg";
    }
    else if (get.src.match("images/peacock.jpg"))
    {
        get.src = "images/robin.webp";
    }
    else if (get.src.match("images/robin.webp"))
    {
        get.src = "images/blue_jay.jpg";
    }
    else {
        get.src = "images/slideshow/Render3.png";
        console.log("ERROR");
    }


}


/* 
Render 3
Render 2
SPOILER_beamy_render
SPOILER_blastrender3
SPOILER_mk_render
SPOILER_Logo_Crimson_RZRVarient
Velvet
Logo_Crimson_Halloween_(Damaged)
unknown3
*/

function backSlide(n){
    var get = document.getElementById('slideshow_main');
    console.log(get);
    if (get.src.match("images/robin.webp")){
        get.src = "images/peacock.jpg";
        console.log("Image 2");
    }
    else if (get.src.match("images/peacock.jpg"))
    {
        get.src = "images/owl.webp";
        console.log("Image 3");
    }
    else if (get.src.match("images/owl.webp"))
    {
        get.src = "images/ostrich.jpg";
        console.log("Image 3");
    }
    else if (get.src.match("images/ostrich.jpg"))
    {
        get.src = "images/falcon.avif";
        console.log("Image 3");
    }
    else if (get.src.match("images/falcon.avif"))
    {
        get.src = "images/cardinal.jpg";
    }
    else if (get.src.match("images/cardinal.jpg"))
    {
        get.src = "images/blue_jay.jpg";
    }
    else if (get.src.match("images/blue_jay.jpg"))
    {
        get.src = "images/robin.webp";
    }
    else {
        get.src = "images/slideshow/Render3.png";
        console.log("ERROR");
    }


}