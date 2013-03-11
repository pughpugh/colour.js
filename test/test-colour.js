testColours = [
    { 
        title: 'White', 
        RGB: { r: 255, g: 255, b: 255 }, 
        HSV: { h: 0,   s: 0,   v: 100 }, 
        HEX: '#FFF',    
        lightOrDark: 'light' 
    },{ 
        title: 'Black', 
        RGB: { r: 0, g: 0, b: 0 }, 
        HSV: { h: 0, s: 0, v: 0 }, 
        HEX: '#000',
        lightOrDark: 'dark'  
    },{ 
        title: 'Green', 
        RGB: { r: 82,  g: 166, b: 65 }, 
        HSV: { h: 110, s: 61,  v: 65 }, 
        HEX: '#52A641', 
        lightOrDark: 'light'
    }
];

// - Conversion

QUnit
    .cases( testColours )
    .test( "RGB to HSV ", function(params){
        var model = 'RGB'
        var colour = new Colour(model, params[model]);
        deepEqual( colour.RGBToHSV( params.RGB ), params.HSV, 'Conversion' );
     });

QUnit
    .cases( testColours )
    .test( "RGB to HEX ", function(params){
        var model = 'RGB'
        var colour = new Colour(model, params[model]);
        deepEqual( colour.RGBToHEX( params.RGB ), params.HEX, 'Conversion' );
     });

QUnit
    .cases( testColours )
    .test( "HSV to RGB ", function(params){
        var model = 'HSV'
        var colour = new Colour(model, params[model]);
        deepEqual( colour.HSVToRGB( params.HSV ), params.RGB, 'Conversion' );
     });

QUnit
    .cases( testColours )
    .test( "HSV to HEX ", function(params){
        var model = 'HSV'
        var colour = new Colour(model, params[model]);
        deepEqual( colour.HSVToHEX( params.HSV ), params.HEX, 'Conversion' );
     });

QUnit
    .cases( testColours )
    .test( "HEX to RGB ", function(params){
        var model = 'HEX'
        var colour = new Colour(model, params[model]);
        deepEqual( colour.HEXToRGB( params.HEX ), params.RGB, 'Conversion' );
     });

QUnit
    .cases( testColours )
    .test( "HEX to HSV ", function(params){
        var model = 'HEX'
        var colour = new Colour(model, params[model]);
        deepEqual( colour.HEXToHSV( params.HEX ), params.HSV, 'Conversion' );
     });

// - Init & Getters

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

