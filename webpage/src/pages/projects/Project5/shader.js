// a shader variable
let theShader;

let grid_x = []
let grid_y = []
const nodes = 6;

function random_angle(){
    let theta = random() * 2.0 * PI;
    return theta;
}

function preload(){
      // load the shader
      theShader = loadShader('./perlin.vert', './perlin.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(512, 512, WEBGL);
  noStroke();

  pixelDensity(1);
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  for(let i =0; i<=nodes; i++)
  {
    for(let j =0; j<=nodes; j++)
    {
        let theta = random_angle();
        grid_x.push(cos(theta));
        grid_y.push(sin(theta));
    }
  }

  theShader.setUniform('x_grid', grid_x);
  theShader.setUniform('y_grid', grid_y);


  // rect gives us some geometry on the screen
  rect(0,0,width,height);
}