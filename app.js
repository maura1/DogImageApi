/*Set up a the client
-Make an Api request using JS
-Get the data from the response
-Add the data from the response to the page
##API requests are asynchronous (they don't complete
immediatly), to help with that we use async and await*/

const url = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.randomDogElement');
const button = document.querySelector('.btn');

//making a request using fetch

async function getRandomDogs() {
    //clear any images on the page when loading
    randomDogsElement.innerHTML = '';
    //using await because it returns a promise
    const response = await fetch(url);
    //The response comes in JSON data, so we need to parse the response as JSON
    const json = await response.json();
    console.log(json.message); //returns just an array of images.Because it is an object we can use the dot notation to iterate over it.
    //This particular API has a message property, other API's have different properties that we can use to iterate over.

    //The message is an array, therefore we can use the forEach to iterate over it

    //Iterate over the array of images and for each image add some html to the randomDogElement
    //This can be dangerous if not using an API that we trust, as it opens you up to cross site scripting
    json.message.forEach((dogImage) => {
        randomDogsElement.innerHTML += `
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${dogImage}" alt="Placeholder image">
              </figure>
            </div>
          </div>
        </div>
        `;
    });
}
button.addEventListener('click', getRandomDogs);

/*//Manually creating the elements is a safer method, especially if are not sure how secure the API is.

//Create a dive element and give it the class name 'column'
const columnElement = document.createElement('div')
columnElement.classList.add('column'))

const cardElement = document.createElement('div');
cardElement.classList.add('card')
//put the cardElement inside the columnElement
cardElement.appendChild(columnElement)

const cardImageElement = document.createElement('div')
cardElement.classList.add('cardImage')
cardImageElement.addendChild(columnElement)

const figureElement = documdnt.createElement('figure')
figureElement.classList.add('image')
cardImageElement.appendChild(figureElement)

const imageElement = document.createElement('img')
imageElement.src = dogImage;
figureElement.appendChild(imageElement)
    

randomDogsElement.appendChild(columnElement)
*/
