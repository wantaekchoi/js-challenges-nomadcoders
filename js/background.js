const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imageUrl = `url('img/${chosenImage}')`;

document.body.style.backgroundImage = imageUrl;
console.log(document.body.style.backgroundImage);

// const url = "https://www.reddit.com/r/wallpaper/"
// const images = document.querySelectorAll('img[alt="Post image"]');
// console.log(images.length);
// for (let image of images) {
//     console.log(image.src);
// }
