float x=0.0;
float y=0.0;
void setup()
{
    size(600,600);
    background(#FFFFFF);
}
void drawpoint()
{
    stroke(#316F2D);
    strokeWeight(0.5);
    float px=map(x,-2.182,2.6558,0,width);
    float py=map(y,0,10/*9.9983*/,height,0);
    point(px,py);
}
void draw()
{
    for(int i=0;i<=10000;i++)
    {
    drawpoint();
    float nextx;
    float nexty;
    float r=random(1);
    if(r<0.01)
    {
    nextx=0;
    nexty=0.16*y;
    }
    else if(r<0.86)
    {
    nextx=0.85*x + 0.04*y;
    nexty=-0.04*x+0.85*y+1.6;
    }
    else if(r<0.93)
    {
    nextx=0.2*x -0.26*y;
    nexty=0.23*x+0.22*y+1.6;
    }
    else
    {
    nextx=-0.15*x + 0.28*y;
    nexty=0.26*x+0.24*y+0.44;
    }
    x=nextx;
    y=nexty;
    }
}