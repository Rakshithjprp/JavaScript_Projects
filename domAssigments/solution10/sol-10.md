Problem 10.

Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![pic2](./images/pic1.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

JavaSript code:

        const rakshith = document.querySelector(".btn-cta-big").children[1];
    	rakshith.addEventListener('mouseover',function(){
    	rakshith.style.backgroundColor = "red";
    	})
    	rakshith.addEventListener('mouseleave',function(){
    	rakshith.style.backgroundColor = "transparent";
    	});

![pic2](./images/pic2.png)
