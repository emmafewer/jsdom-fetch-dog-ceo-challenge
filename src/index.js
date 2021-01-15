document.addEventListener("DOMContentLoaded", function() {

console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'  


function renderImage(dogs) {
    const dog_image_container = document.querySelector('#dog-image-container')
    dogs.message.forEach(dog => {
      const img = document.createElement('img')
      img.src = dog
      dog_image_container.appendChild(img)
      img.style = "width: 200px"
    })
}

function renderBreed(breeds) {
    const ul = document.querySelector('#dog-breeds')
    let dogBreeds = Object.keys(breeds.message)
    dogBreeds.forEach(breed => {
      const li = document.createElement('li')
      li.innerHTML = breed
      ul.appendChild(li)

      li.addEventListener("click", function(){
        li.style.color = "red"
      });
    })
}

function fetchDogs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => renderImage(dogs))

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => renderBreed(breeds))
}

function handleFilter(e) {
    let dropdown = e.target.textContent
    const ul = document.querySelector('#dog-breeds')
    ul.childNodes.filter(breed => function(){
        let filterDog = breed.textContent.charAt(0) == dropdown
      

    });
    // var childs = $element.children();        
    // for (var i = 1; i < childs.length - 1; i++)
    // {
    //     childs[i].css('height', childs[i-1].height());
    //     childs[i].css('width', childs[i+1].width());
    // }
}

let breed_dropdown = document.querySelector('#breed-dropdown')
breed_dropdown.addEventListener('click', handleFilter)

fetchDogs();
});



