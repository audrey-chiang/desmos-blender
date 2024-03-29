// Example of animating objects (animated waves)

state = Calc.getState()

state.expressions.list.push(
{
    type: "folder",
    id: "3",
    collapsed: true,
    title: 'Controls'
},
{
    type: "expression",
    folderId: "3",
    latex: "l_{ightlist}=\\left[20\\cos\\phi,5,20\\sin\\phi\\right]"
},
{
    type: "expression",
    folderId: "3",
    latex: "l_{ight}=n_{ormalize}\\left(l_{ightlist}\\right)"
},
{
    type: "expression",
    folderId: "3",
    latex: "\\phi=2.2",
    slider: {hardMin: true, hardMax: true, loopMode: 'LOOP_FORWARD', min: '0', max: '2\\pi'}
},
{
    type: "expression",
    folderId: "3",
    latex: "a=.93"
},
{
    type: "expression",
    folderId: "3",
    slider: {hardMax: true, max: '10'},
    latex: "a_{2}=-.247"
},
{
    type: "expression",
    folderId: "3",
    latex: "d=40"
},
{
    type: "text",
    folderId: "3",
    text: "toggle orthographic/perspective"
},
{
    type: "expression",
    folderId: "3",
    latex: "t_{oggle}=1",
    slider: {hardMin: true, hardMax: true, min: '0', max: '1', step:'1'}
},
{
    type: "expression",
    folderId: "3",
    color: Desmos.Colors.BLACK,
    hidden: true,
    latex: "\\left(-10a,10a_{2}\\right)"
},
{
    type: "folder",
    id: "1",
    collapsed: true,
    title: 'Functions'
},
{
    type: "text",
    folderId: "1",
    text: "polar to point"
},
{  
    type: "expression",
    folderId: "1",
    latex: "f_{1}\\left(x,y,\\theta\\right)=\\left(\\frac{d}{d-f_{2}\\left(x,y,\\theta\\right)\\cdot t_{oggle}}x\\cos\\left(a+\\theta\\right),\\frac{d}{d-f_{2}\\left(x,y,\\theta\\right)\\cdot t_{oggle}}\\left(x\\sin\\left(a_{2}\\right)\\sin\\left(a+\\theta\\right)+y\\cos\\left(a_{2}\\right)\\right)\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "polar to depth"
},
{
    type: "expression",
    folderId: "1",
    latex: "f_{2}\\left(x,y,\\theta\\right)=x\\sin\\left(a+\\theta\\right)\\cos\\left(a_{2}\\right)-y\\sin\\left(a_{2}\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "cartesian to point"
},
{
    type: "expression",
    folderId: "1",
    latex: "f_{1c}\\left(x,y,z\\right)=f_{1}\\left(\\sqrt{x^{2}+z^{2}},y,\\tan^{-1}\\left(\\frac{z+.0001}{x}\\right)+\\left\\{x<0:1,0\\right\\}\\pi\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "cartesian to depth"
},
{
    type: "expression",
    folderId: "1",
    latex: "f_{2c}\\left(x,y,z\\right)=f_{2}\\left(\\sqrt{x^{2}+z^{2}},y,\\tan^{-1}\\left(\\frac{z+.0001}{x}\\right)+\\left\\{x<0:1,0\\right\\}\\pi\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "polar to cartesian"
},
{
    type: "expression",
    folderId: "1",
    latex: "c_{artesian}\\left(x,y,\\theta\\right)=\\left[x\\cos\\theta,y,x\\sin\\theta\\right]"
},
{
    type: "text",
    folderId: "1",
    text: "cartesian list to polygon"
},
{
    type: "expression",
    folderId: "1",
    latex: "p_{olygon}\\left(l_{ist}\\right)=\\left\\{w_{inding}\\left(c_{onvert}\\left(l_{ist}\\right)\\right)>0:\\operatorname{polygon}\\left(c_{onvert}\\left(l_{ist}\\right)\\right)\\right\\}"
},
{
    type: "text",
    folderId: "1",
    text: "calculates polygon depth given list"
},
{
    type: "expression",
    folderId: "1",
    latex: "d_{epth}\\left(l_{ist}\\right)=\\operatorname{mean}\\left(\\operatorname{sort}\\left(\\left[f_{2c}\\left(l_{ist}\\left[3i+1\\right],l_{ist}\\left[3i+2\\right],l_{ist}\\left[3i+3\\right]\\right)\\operatorname{for}i=\\left[0...\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}-1\\right]\\right]\\right)\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "convert from list of coords to list of points"
},
{
    type: "expression",
    folderId: "1",
    latex: "c_{onvert}\\left(l_{ist}\\right)=\\left[f_{1c}\\left(l_{ist}\\left[3i+1\\right],l_{ist}\\left[3i+2\\right],l_{ist}\\left[3i+3\\right]\\right)\\operatorname{for}i=\\left[0...\\frac{\\operatorname{length}\\left(l_{ist}\\right)}{3}-1\\right]\\right]"
},
{
    type: "text",
    folderId: "1",
    text: "backface culling"
},
{
    type: "expression",
    folderId: "1",
    latex: "w_{inding}\\left(l_{ist}\\right)=\\left(\\sum_{n=1}^{\\operatorname{length}\\left(l_{ist}\\right)-1}\\left(l_{ist}\\left[n+1\\right].x-l_{ist}\\left[n\\right].x\\right)\\left(l_{ist}\\left[n+1\\right].y+l_{ist}\\left[n\\right].y\\right)\\right)+\\left(l_{ist}\\left[1\\right].x-l_{ist}\\left[\\operatorname{length}\\left(l_{ist}\\right)\\right].x\\right)\\left(l_{ist}\\left[1\\right].y+l_{ist}\\left[\\operatorname{length}\\left(l_{ist}\\right)\\right].y\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "vector operations"
},
{
    type: "expression",
    folderId: "1",
    latex: "c_{ross}\\left(A,B\\right)=\\left[A\\left[2\\right]B\\left[3\\right]-A\\left[3\\right]B\\left[2\\right],A\\left[3\\right]B\\left[1\\right]-A\\left[1\\right]B\\left[3\\right],A\\left[1\\right]B\\left[2\\right]-A\\left[2\\right]B\\left[1\\right]\\right]"
},
{
    type: "expression",
    folderId: "1",
    latex: "d_{ot}\\left(A,B\\right)=A\\left[1\\right]B\\left[1\\right]+A\\left[2\\right]B\\left[2\\right]+A\\left[3\\right]B\\left[3\\right]"
},
{
    type: "expression",
    folderId: "1",
    latex: "m_{agnitude}\\left(v\\right)=\\sqrt{v\\left[1\\right]^{2}+v\\left[2\\right]^{2}+v\\left[3\\right]^{2}}"
},
{
    type: "expression",
    folderId: "1",
    latex: "n_{ormalize}\\left(v\\right)=\\left[\\frac{v\\left[1\\right]}{m_{agnitude}\\left(v\\right)},\\frac{v\\left[2\\right]}{m_{agnitude}\\left(v\\right)},\\frac{v\\left[3\\right]}{m_{agnitude}\\left(v\\right)}\\right]"
},
{
    type: "text",
    folderId: "1",
    text: "surface normal"
},
{
    type: "expression",
    folderId: "1",
    latex: "n_{ormal}\\left(l_{ist}\\right)=-c_{ross}\\left(\\operatorname{join}\\left(l_{ist}\\left[7\\right]-l_{ist}\\left[4\\right],l_{ist}\\left[8\\right]-l_{ist}\\left[5\\right],l_{ist}\\left[9\\right]-l_{ist}\\left[6\\right]\\right),\\operatorname{join}\\left(l_{ist}\\left[1\\right]-l_{ist}\\left[4\\right],l_{ist}\\left[2\\right]-l_{ist}\\left[5\\right],l_{ist}\\left[3\\right]-l_{ist}\\left[6\\right]\\right)\\right)"
},
{
    type: "text",
    folderId: "1",
    text: "shading"
},
{
    type: "expression",
    folderId: "1",
    latex: "s_{hadow}\\left(f_{ace}\\right)=.5+d_{ot}\\left(l_{ight},n_{ormalize}\\left(n_{ormal}\\left(f_{ace}\\right)\\right)\\right)\\cdot.5"
},
{
    type: "expression",
    id: "1073",
    color: "#000000",
    folderId: "1",
    latex: "w_{ave1}\\left(x\\right)=.15+.15\\sin\\left(x+w_{aveanimation}\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1075",
    color: "#2d70b3",
    folderId: "1",
    latex: "w_{ave2}\\left(x\\right)=.1\\sin\\left(1.3x+.4w_{aveanimation}\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1076",
    color: "#388c46",
    folderId: "1",
    latex: "w_{ave3}\\left(x\\right)=.2\\sin\\left(1.3x+1.4w_{aveanimation}\\right)",
    hidden: true
},
{
    type: "expression",
    id: "1074",
    color: "#c74440",
    latex: "w_{aveanimation}=15.1",
    hidden: true,
    slider: {
        hardMin: true,
        hardMax: true,
        animationPeriod: 40000,
        loopMode: "LOOP_FORWARD",
        min: "0",
        max: "10\\pi",
        step: ".1"
    }
}
)

const polygons = [

// water
    [.8,218.375,0.764,1.0,
    -5.0,0.0,-5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    -5.0,0.0,5.0],
    
    [.8,218.375,0.764,1.0,
    5.0,0.0,-5.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    -5.0,0.0,-5.0],
    
    [.8,218.375,0.764,1.0,
    5.0,0.0,5.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    5.0,0.0,-5.0],
    
    [.8,218.375,0.764,1.0,
    -5.0,0.0,5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    5.0,0.0,5.0],
    
    [.8,218.375,0.764,1.0,
    -5.0,0.0,5.0,
    5.0,0.0,5.0,
    5.0,0.0,-5.0,
    -5.0,0.0,-5.0],
    
    [.8,218.375,0.764,1.0,
    '-2.5 +w_{ave3}\\left(-2.5+2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    '2.5 +w_{ave3}\\left(2.5+2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    '2.5 +w_{ave3}\\left(2.5+2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    '0.0 +w_{ave3}\\left(0.0+2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    '0.0 +w_{ave3}\\left(0.0+2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    '-2.5 +w_{ave3}\\left(-2.5+2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '2.5 +w_{ave3}\\left(2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '2.5 +w_{ave3}\\left(2.5+0.0\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    '2.5 +w_{ave3}\\left(2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    '2.5 +w_{ave3}\\left(2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    '2.5 +w_{ave3}\\left(2.5+0.0\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '0.0 +w_{ave3}\\left(0.0+-2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    '2.5 +w_{ave3}\\left(2.5+0.0\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '2.5 +w_{ave3}\\left(2.5+2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '0.0 +w_{ave3}\\left(0.0+0.0\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    '0.0 +w_{ave3}\\left(0.0+-2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    '0.0 +w_{ave3}\\left(0.0+-2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    '0.0 +w_{ave3}\\left(0.0+0.0\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '-2.5 +w_{ave3}\\left(-2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    '0.0 +w_{ave3}\\left(0.0+0.0\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '0.0 +w_{ave3}\\left(0.0+2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '-2.5 +w_{ave3}\\left(-2.5+0.0\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0,
    '-2.5 +w_{ave3}\\left(-2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    '-2.5 +w_{ave3}\\left(-2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    '-2.5 +w_{ave3}\\left(-2.5+0.0\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    '-2.5 +w_{ave3}\\left(-2.5+0.0\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '-2.5 +w_{ave3}\\left(-2.5+2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    '2.5 +w_{ave3}\\left(2.5+2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    '0.0 +w_{ave3}\\left(0.0+2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(5.0\\right)',5.0,
    '-2.5 +w_{ave3}\\left(-2.5+2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    '2.5 +w_{ave3}\\left(2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    2.5,'2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '2.5 +w_{ave3}\\left(2.5+0.0\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '2.5 +w_{ave3}\\left(2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    5.0,'2.0 +w_{ave1}\\left(5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '2.5 +w_{ave3}\\left(2.5+2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '2.5 +w_{ave3}\\left(2.5+0.0\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    '2.5 +w_{ave3}\\left(2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    '0.0 +w_{ave3}\\left(0.0+-2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    0.0,'2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    '2.5 +w_{ave3}\\left(2.5+0.0\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '0.0 +w_{ave3}\\left(0.0+0.0\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '0.0 +w_{ave3}\\left(0.0+-2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    '2.5 +w_{ave3}\\left(2.5+2.5\\right) ','2.0 +w_{ave1}\\left(2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '0.0 +w_{ave3}\\left(0.0+2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '0.0 +w_{ave3}\\left(0.0+0.0\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    '0.0 +w_{ave3}\\left(0.0+-2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    '-2.5 +w_{ave3}\\left(-2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    -2.5,'2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    '0.0 +w_{ave3}\\left(0.0+0.0\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '-2.5 +w_{ave3}\\left(-2.5+0.0\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    '-2.5 +w_{ave3}\\left(-2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    '0.0 +w_{ave3}\\left(0.0+2.5\\right) ','2.0 +w_{ave1}\\left(0.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '-2.5 +w_{ave3}\\left(-2.5+2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    '-2.5 +w_{ave3}\\left(-2.5+0.0\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
    [.8,218.375,0.764,1.0,
    '-2.5 +w_{ave3}\\left(-2.5+-2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-5.0\\right)',-5.0],
    
    [.8,218.375,0.764,1.0,
    '-2.5 +w_{ave3}\\left(-2.5+0.0\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(-2.5\\right)',-2.5],
    
    [.8,218.375,0.764,1.0,
    '-2.5 +w_{ave3}\\left(-2.5+2.5\\right) ','2.0 +w_{ave1}\\left(-2.5\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(2.5\\right)',2.5,
    -5.0,'2.0 +w_{ave1}\\left(-5.0\\right) +w_{ave2}\\left(0.0\\right)',0.0],
    
]

n = polygons.length

// Define color list
var myColors="";
var myDepths="";
var myOpacity=[];
for (let i = 0; i < n; i++) {
    myColors += "\\operatorname{hsv}\\left("+polygons[i].slice(1,4)+"\\cdot s_{hadow}\\left(s_{"+i+"}\\right)\\right),";
    myDepths += "d_{epth}\\left(s_{"+i+"}\\right),"
    myOpacity.push(polygons[i].slice(0,1))
}

let new_opacity = myOpacity.slice()

for (let i = 0; i < myOpacity.length; i++) {
    if (myOpacity[i] == .8) {
        new_opacity[i] = .1
    }
}

myDepths = myDepths.slice(0,-1)
myColors = myColors.slice(0,-1)

var myPolygons = ""
for (let i = 0; i < n; i++) {
    myPolygons += "p_{olygon}\\left(s_{"+i+"}\\right),"
}
myPolygons = myPolygons.slice(0,-1)

state.expressions.list.push(
{
// BACKGROUND
    type: "folder",
    id: "5",
    collapsed: true,
    title: 'Background'
},
{ // Background color
    type: "expression",
    folderId: "5",
    latex: "b_{ackground}=\\operatorname{rgb}\\left(230,223,225\\right)"
},
{ // Background
    type: "expression",
    folderId: "5",
    color: "#d6d6d6",
    fillOpacity: "1",
    latex: "\\left[-1,1\\right]y<100"
},
// SORTING & DRAWING POLYGONS
{
    type: "folder",
    id: "4062",
    collapsed: true,
    title: "Sorting & Drawing Polygons"
},
{ // Color list
    type: "expression",
    folderId: "4062",
    latex: "c_{olors}=\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)"
},
{
    type: "expression",
    folderId: "4062",
    latex: "d_{epths}=\\left["+myDepths+"\\right]"
},
{ // Graph polygons
    type: "expression",
    folderId: "4062",
    lineOpacity: "\\operatorname{sort}\\left(\\left["+new_opacity+"\\right],d_{epths}\\right)",
    lineWidth: "1",
    fillOpacity: "0",
    colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)",
    latex: "\\operatorname{sort}\\left(\\left["+myPolygons+"\\right],d_{epths}\\right)"
},
{ // Graph polygons
    type: "expression",
    folderId: "4062",
    lineOpacity: "0",
    fillOpacity: "\\operatorname{sort}\\left(\\left["+myOpacity+"\\right],d_{epths}\\right)",
    colorLatex: "\\operatorname{sort}\\left(\\left["+myColors+"\\right],d_{epths}\\right)",
    latex: "\\operatorname{sort}\\left(\\left["+myPolygons+"\\right],d_{epths}\\right)"
},
{
    type: "folder",
    id: "2",
    collapsed: true,
    title: "Polygons"
},
)
// Add individual polygon expressions
for (let i = 0; i < polygons.length; i++) {
    state.expressions.list.push({
        type: "expression",
        folderId: "2",
        latex: "s_{"+i+"}=\\left["+polygons[i].slice(4)+"\\right]"
    })
}

// Transparent image so user can rotate by dragging anywhere
state.expressions.list.push(
    {type: 'image',
    center: "\\left(d_{rag}\\right)",
    draggable: true,
    height: "100",
    id: "990",
    image_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAOECAYAAAD5Tf2iAAAAAXNSR0IArs4c6QAAIABJREFUeF7s2UERAAAIAkHpX9oeN2sDFn/sHAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJrBYHnEIECBAgAABAgQIECBAgAABAgQIECBAgAABAmcA8QQECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAFzR1r1AAAgAElEQVQCBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgP/ryUoAACAASURBVAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIAAECBAgQIECAAAECBAgQIECAAAECBAgQMID4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAnYADJVSoQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgYADxAwQIECBAgAABAgQIECBAgAABAgQIECBAgEBOwACSq1QgAgQIECBAgAABAgQIECBAgAABAgQIECBAwADiBwgQIECAAAECBAgQIECAAAECBAgQIECAAIGcgAEkV6lABAgQIECAAAECBAgQIECAAAECBAgQIECAgAHEDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI5AQNIrlKBCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQOIHyBAgAABAgQIECBAgAABAgQIECBAgAABAgRyAgaQXKUCESBAgAABAgQIECBAgAABAgQIECBAgAABAgYQP0CAAAECBAgQIECAAAECBAgQIECAAAECBAjkBAwguUoFIkCAAAECBAgQIECAAAECBAgQIECAAAECBAwgfoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDICRhAcpUKRIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBhA/AABAgQIECBAgAABAgQIECBAgAABAgQIECCQEzCA5CoViAABAgQIECBAgAABAgQIECBAgAABAgQIEDCA+AECBAgQIECAAAECBAgQIECAAAECBAgQIEAgJ2AAyVUqEAECBAgQIECAAAECBAgQIECAAAECBAgQIGAA8QMECBAgQIAAAQIECBAgQIAAAQIECBAgQIBATsAAkqtUIAIECBAgQIAAAQIECBAgQIAAAQIECBAgQMAA4gcIECBAgAABAgQIECBAgAABAgQIECBAgACBnIABJFepQAQIECBAgAABAgQIECBAgAABAgQIECBAgIABxA8QIECAAAECBAgQIECAAAECBAgQIECAAAECOQEDSK5SgQgQIECAAAECBAgQIECAAAECBAgQIECAAAEDiB8gQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEcgIGkFylAhEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIGED9AgAABAgQIECBAgAABAgQIECBAgAABAgQI5AQMILlKBSJAgAABAgQIECBAgAABAgQIECBAgAABAgQMIH6AAAECBAgQIECAAAECBAgQIECAAAECBAgQyAkYQHKVCkSAAAECBAgQIECAAAECBAgQIECAAAECBAgYQPwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkBMwgOQqFYgAAQIECBAgQIAAAQIECBAgQIAAAQIECBAwgPgBAgQIECBAgAABAgQIECBAgAABAgQIECBAICdgAMlVKhABAgQIECBAgAABAgQIECBAgAABAgQIECBgAPEDBAgQIECAAAECBAgQIECAAAECBAgQIECAQE7AAJKrVCACBAgQIECAAAECBAgQIECAAAECBAgQIEDAAOIHCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgZyAASRXqUAECBAgQIAAAQIECBAgQIAAAQIECBAgQICAAcQPECBAgAABAgQIECBAgAABAgQIECBAgAABAjkBA0iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABA4gfIECAAAECBAgQIECAAAECBAgQIECAAAECBHICBpBcpQIRIECAAAECBAgQIECAAAECBAgQIECAAAECBhA/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECOQEDCC5SgUiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEDCB+gAABAgQIECBAgAABAgQIECBAgAABAgQIEMgJGEBylQpEgAABAgQIECBAgAABAgQIECBAgAABAgQIGED8AAECBAgQIECAAAECBAgQIECAAAECBAgQIJATMIDkKhWIwLdnxzQAAAAIw/y7no+lEih8ECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAAB4d2+agAACctJREFUAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgAABB4gNECBAgAABAgQIECBAgAABAgQIECBAgAABAjsBB8iuUoEIECBAgAABAgQIECBAgAABAgQIECBAgACBAOdNA4X8xs2jAAAAAElFTkSuQmCC",
    name: "transparent.png",
    width: "100"},
    {
        type: "expression",
        id: "1",
        foreground: true,
        color: "#c74440",
        latex: "d_{rag}=\\left(-5a,5a_{2}\\right)",
        hidden: true,
        dragMode: "XY"
    }
)

Calc.setState(state)
