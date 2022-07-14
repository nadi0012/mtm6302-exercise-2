// Full sized Images : 1.jpg
// Thumbnail-sized images: 1-sm.jpg

// Create an array of objects that contain the image Names and URLs
const galleryImages = [
  { title: "Vintage Car", url: "img/1.jpg" },
  { title: "Ferris wheel", url: "img/2.jpg" },
  { title: "Womans Face Emerging From the Dark", url: "img/3.jpg" },
  { title: "Stem of Tree", url: "img/4.jpg" },
  { title: "Man Playing Electric Guitar", url: "img/5.jpg" },
  { title: "Photo of Person Holding Polaroid Camera", url: "img/6.jpg" },
  { title: "City Bike", url: "img/7.jpg" },
  { title: "Look Up", url: "img/8.jpg" },
  {
    title: "Aerial View Black Wooden Row Boat on Body of Water",
    url: "img/9.jpg",
  },
  { title: "Silhouette of Man", url: "img/10.jpg" },
  { title: "Woman Under Black Veil", url: "img/11.jpg" },
  { title: "Silhouette of a person standing near wall", url: "img/12.jpg" },
];

// Create variabes for div#gallery and div#modal
const $gallery = document.getElementById("gallery");
const $modal = document.getElementById("modal");

// Create an empty array to put the dynamically created divs in
const galleryArray = [];
// Create a function to get the index number of the image by extracting it from the URL
function getImageNumber(url) {
  return url.substring(
    // start index number,
    url.indexOf("/") + 1,
    // end index number
    url.indexOf(".jpg")
  );
}
// Create a function to get thumbnail URL from full URL by extracting the index and adding it into 'img/index-sm.jpg'
function getThumbnail(url) {
  return `img/${getImageNumber(url)}-sm.jpg`;
}
// Loop through the array of objects called galleryImages (so use for...of not for...in) and for each item, push a string literal with a div containing the gallery image thumbnail and an h2 with the name of the name into the gallery array
for (const galleryImage of galleryImages) {
  galleryArray.push(`
       <div class="gallery-item">
          <img src="${getThumbnail(galleryImage.url)}" data-title="${
    galleryImage.title
  }" data-full="${galleryImage.url}" class="gallery-item-image">
 
       </div>
    `);
}
// Add the elements inside the gallery array into the div#gallery using the .innerHTML property
$gallery.innerHTML = galleryArray.join("");
// Add an event listener on the div#gallery element and use e.target.closest on the element with a class of gallery-item to make sure that if the gallery item OR its children (the img and the h2) are clicked, the modal opens
$gallery.addEventListener("click", function (e) {
  const item = e.target.closest(".gallery-item-image");

  if (item) {
    // update modal html
    $modal.innerHTML = `<img src="${item.dataset.full}" alt=${item.dataset.title}>
                         <figcaption>${item.dataset.title}</figcaption>`;
    // add the class of 'show' to the modal
    $modal.classList.toggle("show");
  }
});
// Add an event listener on the modal to close it when it is clicked
$modal.addEventListener("click", function () {
  // remove the 'show' class from modal
  $modal.classList.toggle("show");
});
