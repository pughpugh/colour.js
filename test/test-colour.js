testColours = [
    { title: 'White', RGB: { r: 255, g: 255, b: 255 }, HSV: { h: 0,   s: 0,  v: 100 }, HEX: '#FFF',    lightOrDark: 'light' },
    { title: 'Black', RGB: { r: 0,   g: 0,   b: 0   }, HSV: { h: 0,   s: 0,  v: 0   }, HEX: '#000',    lightOrDark: 'dark'  },
    { title: 'Green', RGB: { r: 82,  g: 166, b: 65  }, HSV: { h: 110, s: 61, v: 65  }, HEX: '#52A641', lightOrDark: 'light'  }
];

QUnit
    .cases( testColours )
    .test( "New RGB ", function(params){
        var model = 'RGB'
        var colour = new Colour(model, params[model]);

        deepEqual( colour.RGB(), params.RGB, 'RGB get' );
        deepEqual( colour.HSV(), params.HSV, 'HSV get' );
        equal( colour.HEX(),     params.HEX, 'HEX get' );
     });

QUnit
    .cases( testColours )
    .test( "New HSV ", function(params){
        var model = 'HSV'
        var colour = new Colour(model, params[model]);

        deepEqual( colour.RGB(), params.RGB, 'RGB get' );
        deepEqual( colour.HSV(), params.HSV, 'HSV get' );
        equal( colour.HEX(),     params.HEX, 'HEX get' );
     });

QUnit
    .cases( testColours )
    .test( "New HEX ", function(params){
        var model = 'HEX'
        var colour = new Colour(model, params[model]);

        deepEqual( colour.RGB(), params.RGB, 'RGB get' );
        deepEqual( colour.HSV(), params.HSV, 'HSV get' );
        equal( colour.HEX(),     params.HEX, 'HEX get' );
     });

QUnit
    .cases( testColours )
    .test( "Light Or Dark ", function(params){
        var model = 'RGB'
        var colour = new Colour(model, params[model]);
        equal( colour.lightOrDark(), params.lightOrDark, 'lightOrDark' );
     });

