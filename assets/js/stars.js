
var Stars = function(container){
    this.container = container;
    
}

// Generate stars on the container;
Stars.prototype.randomStars = function(){
    if(this.container instanceof HTMLDivElement) {
        var skyBox = document.createElement('div');
        var sky = document.createElement('div');
        var star = document.createElement('div');
        skyBox.classList.add('sky-box');
        sky.classList.add('sky');
        star.classList.add('star');
        star.style.top = Math.floor(Math.random()*100) + '%';
        star.style.left= Math.floor(Math.random()*100) + '%';
        sky.appendChild(star);
        skyBox.appendChild(sky);
        this.container.insertBefore(skyBox,this.container.lastElementChild);

        setInterval(function(){
            star.style.top = Math.floor(Math.random()*100) + '%';
            star.style.left = Math.floor(Math.random()*100) + '%'
        },2000)

    }else{
        throw new Error('Invalid Container')
    }
}

// Clears all the stars generated;
Stars.prototype.clearSky = function(){}