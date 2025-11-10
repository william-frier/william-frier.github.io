precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

#define NODES 6

uniform float x_grid[(NODES+1)*(NODES+1)];
uniform float y_grid[(NODES+1)*(NODES+1)];

float dot_product(float x, float y, float vx, float vy, float gx, float gy){
    float dx = x - vx;
    float dy = y - vy;

    return gx*dx + gy*dy;
}

float smooth_lerp(float a, float b,float x){

    float tmp = 6.*x*x*x*x*x - 15.*x*x*x*x + 10.*x*x*x;
    return a + tmp*(b-a);
}

void main() {
    // copy the vTexCoord
    // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
    // we can use it to access every pixel on the screen
    vec2 coord = vTexCoord;
 
    float r = 0.5;
    //for(int i = 0; i < NODES*NODES; i++) if(coord.x < x_grid[i]) r-=0.01;

    float nodes = float(NODES);
    float xf = coord.x*nodes - fract(coord.x*nodes); //between 0 and NODES
    float yf = coord.y*nodes - fract(coord.y*nodes); //between 0 and NODES

    float x = coord.x*nodes; //between 0 and NODES
    float y = coord.y*nodes; //between 0 and NODES


    float tl = 0.;//dot_product(x, y, xf,     yf,     gx,  gy);
    float tr = 0.;//dot_product(x, y, xf+1.0, yf,     gxp, gy);
    float bl = 0.;//dot_product(x, y, xf,     yf+1.0, gx,  gyp);
    float br = 0.;//dot_product(x, y, xf+1.0, yf+1.0, gxp, gyp);
    for( int i =0; i<NODES; i++)
    {
        for(int j=0; j<NODES; j++)
        {
            if(i == int(xf) && j == int(yf))
            {
                float gx =  x_grid[i+j*(NODES+1)];
                float gy =  y_grid[i+j*(NODES+1)];
                
                tl = dot_product(x, y, xf, yf,  gx  ,  gy);
            }

            if(i == int(xf + 1.) && j == int(yf))
            {
                float gx =  x_grid[i+j*(NODES+1)];
                float gy =  y_grid[i+j*(NODES+1)];
                
                tr = dot_product(x, y, xf+1., yf,  gx  ,  gy);
            }

            if(i == int(xf) && j == int(yf + 1.))
            {
                float gx =  x_grid[i+j*(NODES+1)];
                float gy =  y_grid[i+j*(NODES+1)];
                
                bl = dot_product(x, y, xf, yf+1.,  gx  ,  gy);
            }

            if(i == int(xf+1.) && j == int(yf+1.))
            {
                float gx =  x_grid[i+j*(NODES+1)];
                float gy =  y_grid[i+j*(NODES+1)];
                
                br = dot_product(x, y, xf+1., yf+1.,  gx  ,  gy);
            }
        }
    }

    float t = smooth_lerp(tl, tr, x-xf);
    float b = smooth_lerp(bl, br, x-xf);

    r = smooth_lerp(t,b, y-yf);

    gl_FragColor = vec4(r, r, r, 1 );
}