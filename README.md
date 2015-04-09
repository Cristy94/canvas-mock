# canvas-mock
I created this to be used when running Phaser.js in a Node.js environment. This can be used instead of node-canvas to simulate the existance of canvas.

# Installation
Install it as any other node module:  
`npm install canvas-mock`

# Usage
The module appends the mock canvas functions to an element.
This is a usage example with `jsdom`

    var jsdom = require("jsdom").jsdom;
    var window = jsdom().defaultView;
    var canvasMockify = require('canvas-mock');
    
    var Canvas = window.document.createElement('canvas');
    canvasMockify(Canvas); // mock canvas functions required by Phaser.js are added
