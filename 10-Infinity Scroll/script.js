const imageContainer = document.getElementById('image-container');
const loeder = document.getElementById('loeder');

let photosArray = [];

const count = 20;
const apiKey = 'BxF87PZs5Gsi-EmZttVXc3RdVlB9isDNOCcnuQQ2P4M';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  photosArray.forEach(
    (photo) => {
      //create <a> element
      const item = document.createElement('a');
      item.setAttribute('href', photo.links.html);
      item.setAttribute('target', '_blank');
      //create <img> element
      const img = document.createElement('img');
      img.setAttribute('src', photo.urls.regular);
      img.setAttribute('alt', photo.alt_description);
      img.setAttribute('title', photo.alt_description);
      //put boths inside imageContainer
      item.appendChild(img);
      imageContainer.appendChild(item);
    }
  )
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
     displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', function () {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos()
  }
})

getPhotos();