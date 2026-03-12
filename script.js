document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" }
];

function downloadImage(url){
  return new Promise((resolve,reject)=>{

    const img = document.createElement("img");
    img.src = url;

    img.onload = ()=> resolve(img);
    img.onerror = ()=> reject("Image failed");

  });
}

function downloadImages(){

  const promises = images.map(img => downloadImage(img.url));

  Promise.all(promises)
    .then(result => {

      result.forEach(img=>{
        output.appendChild(img);
      });

    })
    .catch(err=>{
      console.log(err);
    });
}

btn.addEventListener("click", downloadImages);

});