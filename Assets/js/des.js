const imageView = document.getElementById("imgSent")
const descriptionView = document.getElementById("imgDescription")
const titleView = document.getElementById("imgTitle")


const urlParams = new URLSearchParams(window.location.search);
const href = urlParams.get('href');
const title =urlParams.get('title');
const des = urlParams.get('description');



document.addEventListener("DOMContentLoaded", () => {
imageView.src = `${href}`;
titleView.innerHTML = `<img src="https://img.icons8.com/officel/50/000000/planet.png"/> `+  title;
descriptionView.innerHTML = des;

    
});

