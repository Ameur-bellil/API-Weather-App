
const DogImage = document.getElementById('DogImage')
const DogButton = document.getElementById('DogButton')
const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)
    DogImage.innerHTML = `<img src= '${json.message}' 
    height='150px' width='150px' />`	

  })
}
 DogButton.onclick = () => getNewDog()
