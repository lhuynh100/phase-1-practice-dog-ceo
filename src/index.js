

console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {

  // CONSTANTS    
      const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
      const imgContainer = document.getElementById('dog-image-container');
      const breedUrl = 'https://dog.ceo/api/breeds/list/all';
      const breedList = document.getElementById('dog-breeds');
      const breedDropDown = document.getElementById('breed-dropdown');
      let breeds = [];
      breedDropDown.addEventListener('change', showOnly)
  
      let imgArray = fetch(imgUrl)
          .then( res => res.json() )
          .then(json => {
              for (let i=0; i < json.message.length; i++){
                      let img = document.createElement('img');
                      img.src = json.message[i]
                      imgContainer.appendChild(img);
              }
          })
  
      let breedArray = fetch(breedUrl)
          .then( res => res.json() )
          .then(json => { 
              for (const breed in json.message){ breeds.push(breed); }
              breeds.forEach( breed => displayBreedList(breed))
          })
  
          function showOnly(e) {
              filteredBreeds = []
              while (breedList.hasChildNodes()) {
                  breedList.removeChild(breedList.firstChild);
              }
              filteredBreeds.push(breeds.filter(breed => breed.charAt(0) == e.target.value))
              filteredBreeds[0].forEach( breed => displayBreedList(breed))
          }
  
          function changeColour(){
              this.style.color = 'blue';
          }
  
          function displayBreedList(breed) {
              let breedItem = document.createElement('li');
                  breedItem.innerText = breed;
                  breedList.appendChild(breedItem);
                  breedItem.addEventListener('click', changeColour)
          }
  });

