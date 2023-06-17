let blob

class Blobbo {
  constructor() {
    // lets set up the blobbo
    this.numOfPoints = 500
    this.time = 0
  }
  
  wave(num, amp, freq, speed) {
    return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time * speed)
  }
  
  draw() {
    noStroke()
    fill("#91fc9e")
    beginShape()
    
    // lets draw the blobbo
    for (let num = 0; num < this.numOfPoints; num = num + 1) {
      
      let angle = TWO_PI * num / this.numOfPoints
      let r = 250 
      	+ this.wave(num, 10, 3, 1) 
      	+ this.wave(num, 15, 7, 3) 
      	+ this.wave(num, 5, 9, 0) 
      	+ this.wave(num, 2, 13, -5)
       
      let x = (document.querySelector('.image').offsetWidth / 2) + r * cos(angle)
      let y = (document.querySelector('.image').offsetHeight / 2) + r * sin(angle)
      
      vertex(x, y)
    }
    endShape()
    
    this.time = this.time + 0.01
  }
}

function setup() {
  createCanvas(document.querySelector('.image').offsetWidth, document.querySelector('.image').offsetHeight)
  blob = new Blobbo()
  
}

function draw() {
  background("#7446df")
  blob.draw()
}