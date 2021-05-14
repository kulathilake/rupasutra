
var Parallax = function(speed) {
    this.speed = speed || 0.5;
    this.lastScrollPos = 0;
}

Parallax.prototype.slowDown = function(element) {
    element.style.backgroundPositionY = window.scrollY*this.speed*(-1) + 'px';
}

Parallax.prototype.isScrollingDown = function() {
    var isDown = this.lastScrollPos < window.pageYOffset;
    this.lastScrollPos = window.pageYOffset;
    return isDown;
}

Parallax.prototype.panWithMouse = function(element,dampingX=1,dampingY=1) {

    function listener(e){
        element.style.backgroundPositionX = e.clientX*this.speed*dampingX + 'px';
        element.style.backgroundPositionY = e.clientY*this.speed*dampingY + 'px';
    };

    element.onmousemove = listener.bind(this);

}