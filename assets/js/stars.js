
var Stars = function(container){
    this.container = container;
    this.gradients = ['star-hot','star-cold', 'star-radioactive'];
    this.inclinations = [
        'sky-incl-45','sky-incl-60','sky-incl-180','sky-incl-neg-180'
    ]
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
        star.style.top = '25%' ||Math.floor(Math.random()*100) + '%';
        star.style.left= '30%' ||Math.floor(Math.random()*100) + '%';
        sky.appendChild(star);
        skyBox.appendChild(sky);
        this.container.insertBefore(skyBox,this.container.lastElementChild);

        setInterval(() =>{
            var random  = Math.floor(Math.random()*100);
            var colorIndex = random%this.gradients.length;
            var inclIndex = random%this.inclinations.length;
            star.classList.toggle(this.gradients[colorIndex]);
            sky.classList.toggle(this.inclinations[inclIndex]);
            star.style.top = Math.floor(Math.random()*100) + '%';
            star.style.left = Math.floor(Math.random()*100) + '%'
        },2000)

    }else{
        throw new Error('Invalid Container')
    }
}

// Clears all the stars generated;
Stars.prototype.clearSky = function(){}