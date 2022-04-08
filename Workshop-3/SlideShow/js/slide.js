let index = 0;
const img = document.querySelector("img");
const imgArray = [ 
    "img/photo-1.avif",
    "img/photo-2.avif",
    "img/photo-3.avif",
    "img/photo-4.avif",

];

//EventListers

img.addEventListener("click", imageNext);
img.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter" ) {
        imageNext();
    }
})

function imageNext() {
    index++;
    img.src = imgArray[index % imgArray.length];
}