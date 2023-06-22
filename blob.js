class Blobbo {
  constructor() {
    // Let's set up the blobbo
    this.numOfPoints = 360;
    this.time = 0;
  }
  
  wave(num, amp, freq, speed) {
    return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time * speed);
  }
  
  draw() {
    noStroke();
    fill("#7446df");
    beginShape();
    
    // Let's draw the blobbo
      
    //   const imageDiv = select('.image');
    //   imageDiv.width = imageDiv.offsetWidth;
    //   imageDiv.height = imageDiv.offsetHeight;
    //   const imageDiv = document.querySelector('.image');
      
    for (let num = 0; num < this.numOfPoints; num = num + 1) {
      let angle = TWO_PI * num / this.numOfPoints;
      let r = 170 
        + this.wave(num, 9, 3, 1) 
        + this.wave(num, 10, 7, 3) 
        + this.wave(num, 10, 9, 0) 
        // + this.wave(num, 2, 13, -5);
       
      let x = (width  / 2) + r * cos(angle);
      let y = (height / 2) + r * sin(angle);
      
      vertex(x, y);
    }
    endShape();
    
      this.time = this.time + 0.009;
      requestAnimationFrame(this.draw.bind(this));
}
}

function setup() {
  const imageDiv = select('.image');
  const canvas = createCanvas(imageDiv.width, imageDiv.height);
  canvas.parent(imageDiv);
  blob = new Blobbo();
}

function draw() {
//   background("#7446df");
  blob.draw();
}

window.addEventListener('DOMContentLoaded', () => {
  const imageDiv = select('.image');
  const canvas = createCanvas(imageDiv.width, imageDiv.height);
  canvas.parent(imageDiv);
  setup();
});
