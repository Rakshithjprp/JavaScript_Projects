const button = document.getElementById('button');
    colors = ["red", "blue", "green", "yellow"], // the color choices
    index = 0; 

   

button.addEventListener('click', function onClick(event) {
  // 👇️ change background color
    document.getElementById('canvas').style.backgroundColor = colors[index];  // set the color of body to the current color
  index = (index + 1) % colors.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)

});