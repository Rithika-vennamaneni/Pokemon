// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const theUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(i=1;i<151;i++){
    
    const newImg = document.createElement('img');
    newImg.src = `${theUrl}${i}.png`
    container.appendChild(newImg)
   
    
}