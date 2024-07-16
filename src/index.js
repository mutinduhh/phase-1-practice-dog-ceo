const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.getElementById("dog-image-container");
    data.message.forEach(imageUrl => {
      const img = document.createElement("img");
      img.src = imageUrl;
      dogImageContainer.appendChild(img);
    });
  });

const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const dogBreedsList = document.getElementById("dog-breeds");
    for (const breed in data.message) {
      const breedItem = document.createElement("li");
      breedItem.textContent = breed;
      dogBreedsList.appendChild(breedItem);
    }
  });

document.getElementById("dog-breeds").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.style.color = "red"; 
  }
});

document.getElementById("breed-dropdown").addEventListener("change", function(event) {
  const selectedLetter = event.target.value;
  const dogBreeds = document.querySelectorAll("#dog-breeds li");
  dogBreeds.forEach(breed => {
    if (breed.textContent.startsWith(selectedLetter)) {
      breed.style.display = "list-item"; 
    } else {
      breed.style.display = "none"; 
    }
  });
});