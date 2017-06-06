/*
travelling salesperson problem(TSP)

"Given a list of cities and the distances between each pair of cities, 
what is the shortest possible route that visits each city exactly once 
and returns to the origin city?"

Problem Type: 
It is an NP-hard problem in combinatorial optimization, 
important in operations research and theoretical computer science.
*/

const cities = [];
const totalCities = 8;

let recordDistance;
let bestEver = cities.slice();

function setup() {
  createCanvas(640, 480);
  randomCitiesGeo();

  const d = calcDistance(cities);
  recordDistance = d;
}

function draw() {
  background(0);
  drawCities();

}

/*Helper functions*/
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function calcDistance(points) {
  let sum = 0; 
  for (let i = 0; i < points.length -1; i++) {
    let d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    sum+=d;
  }
  return sum;
}



/*Cities*/
function randomCitiesGeo() {
  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height));
    cities[i] = v;
  }
}

function drawCities() {
  fill(255);
  cities.forEach( city => {
    ellipse(city.x, city.y, 10,10);
  })

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  cities.forEach( city => {
    vertex(city.x, city.y);
  })
  endShape();

  stroke(255, 0 ,255);
  strokeWeight(8);
  noFill();
  beginShape();
  bestEver.forEach( city => {
    vertex(city.x, city.y);
  })
  endShape();

  let i = Math.floor(random(cities.length));
  let j = Math.floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if ( d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
    console.log('recordDistance', recordDistance)
  }
}

function drawBestEverCities() {
  stroke(255, 0 ,255);
  strokeWeight(4);
  noFill();
  beginShape();
  cities.forEach( city => {
    vertex(bestEver.x, bestEver.y);
  })
  endShape();
}
