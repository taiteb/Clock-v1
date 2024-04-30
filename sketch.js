function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  translate(width/2, height/2)
  var time = new Date(Date.now());
  // var time = new Date('Mar 1, 1998, 12:30')
  var hour = time.getHours();
  var minute = time.getMinutes();
  var seconds = time.getSeconds();
  if (hour > 12){
    hour = hour - 12;
  };
  background(220);
  noStroke();
  text(`It is ${hour}:${minute}:${seconds}`, -200, -190);

  strokeWeight(2)
  var clockRadius = 150;

  var hourPosition = calculatePosition((clockRadius/2), 12, hour);
  var minutePosition = calculatePosition((clockRadius*0.75), 60, minute);
  var secondPosition = calculatePosition((clockRadius), 60, seconds);
  fill(255)
  var secondCircle = circle(0, 0, clockRadius*2)
  stroke(0, 0, 255)
  var hourHand = line(0, 0, hourPosition[0], hourPosition[1])
  stroke(0,255,0)
  var minuteHand = line(0, 0, minutePosition[0], minutePosition[1])
  stroke(255,0,0)
  var secondHand = line(0,0,secondPosition[0], secondPosition[1])
  
}

function calculatePosition(radius, increment, current) {
  var r = radius;
  var i = increment;
  var c = current;

  if (i == 12 || i == 60){
    return [r * (sin(PI * 2 * (-(360/i) * c + 180)/360)), r * (cos(PI * 2 * (-(360/i) * c + 180)/360))]
  } else {
    throw RangeError("Must be 12 (hours) or 60 (seconds or minutes)")
  }
}