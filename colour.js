function Colour( format, values ){
    this.models = {
        RGB: { r: 0, g: 0, b: 0 },
        HSV: { h: 0, s: 0, v: 0 },
        HEX: '#000'
    };

    this.setColour( format, values );
}

Colour.prototype = {

    /*
     * Setters
     */

    setColour: function( format, values ){
        switch( format ){
            case 'RGB':
                this.setRGB(values);
                break;
            case 'HSV':
                this.setHSV(values);
                break;
            case 'HEX':
                this.setHEX(values);
                break;
            default:
                throw "Invalid colour format";
        }
    },

    setRGB: function(rgb){
        this.models.RGB = rgb;
        this.models.HSV = this.RGBToHSV(rgb);
        this.models.HEX = this.RGBToHEX(rgb);
    },

    setHSV: function(hsv){
        this.models.HSV = hsv;
        this.models.RGB = this.HSVToRGB(hsv);
        this.models.HEX = this.HSVToHEX(hsv);
    },

    setHEX: function(hex){
        this.models.HEX = hex;
        this.models.RGB = this.HEXToRGB(hex);
        this.models.HSV = this.HEXToHSV(hex);
    },

    /*
     * Getters
     */

    HEX: function(){
        return this.models.HEX;
    },

    RGB: function(){
        return this.models.RGB;
    },

    HSV: function(){
        return this.models.HSV;
    },

    /*
     * Conversion
     */

    RGBToHSV: function(rgb){
        var r = rgb.r / 255,
            g = rgb.g / 255,
            b = rgb.b / 255;
            minVal = Math.min(r, g, b),
            maxVal = Math.max(r, g, b),
            delta = maxVal - minVal,
            h = s = v = maxVal;

        if (delta == 0) {
            h = 0;
            s = 0;
        } 
        else {
            s = delta / maxVal;
            var del_R = (((maxVal - r) / 6) + (delta / 2)) / delta;
            var del_G = (((maxVal - g) / 6) + (delta / 2)) / delta;
            var del_B = (((maxVal - b) / 6) + (delta / 2)) / delta;

            if (r == maxVal)
                h = del_B - del_G;
            else if (g == maxVal)
                h = (1 / 3) + del_R - del_B;
            else if (b == maxVal)
                h = (2 / 3) + del_G - del_R;
            
            if (h < 0) h += 1;
            if (h > 1) h -= 1;
        }

        h *= 360;
        s *= 100;
        v *= 100;

        return { 
            h: Math.round(h), 
            s: Math.round(s), 
            v: Math.round(v)
        };
    },

    RGBToHEX: function(rgb){
        var colour = '#',
            hr     = ( 0 + rgb.r.toString(16) ).substr(-2),
            hg     = ( 0 + rgb.g.toString(16) ).substr(-2),
            hb     = ( 0 + rgb.b.toString(16) ).substr(-2);

        if ( hr.charAt(0) === hr.charAt(1) &&
             hg.charAt(0) === hg.charAt(1) &&
             hb.charAt(0) === hb.charAt(1)    ){
            colour += hr.charAt(0) + hg.charAt(0) + hb.charAt(0);
        }
        else{
            colour += hr + hg + hb;
        }

        return colour.toUpperCase();        
    },

    HSVToRGB: function(hsv){
        var r, g, b,
            h = hsv.h / 60, s = hsv.s / 100, v = hsv.v / 100,
            i = Math.floor(h),
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - s * (1 - f));

        if(s === 0) {
            r = g = b = v;
        }
        else { 
            switch(i){
                case 0: r = v, g = t, b = p; break;
                case 1: r = q, g = v, b = p; break;
                case 2: r = p, g = v, b = t; break;
                case 3: r = p, g = q, b = v; break;
                case 4: r = t, g = p, b = v; break;
                default: r = v, g = p, b = q; break;
            }
        }
    
        return { 
            r: Math.round( r * 255 ), 
            g: Math.round( g * 255 ), 
            b: Math.round( b * 255 )
        };
    },

    HSVToHEX: function(hsv){
        var rgb = this.HSVToRGB( hsv );
        var hex = this.RGBToHEX( rgb );
        return hex;
    },

    HEXToRGB: function(hex){
        var hex = hex.substr(1);
        var rgb = { r:0, g:0, b:0 };

        tripLength = hex.length / 3;

        if( tripLength === 2 ) {
            rgb.r = parseInt( hex.substr( 0, 2 ), 16 );
            rgb.g = parseInt( hex.substr( 2, 2 ), 16 );
            rgb.b = parseInt( hex.substr( 4, 2 ), 16 );
        }
        else {
            rgb.r = parseInt( hex.substr( 0, 1 ) + hex.substr( 0, 1 ), 16 );
            rgb.g = parseInt( hex.substr( 1, 1 ) + hex.substr( 1, 1 ), 16 );
            rgb.b = parseInt( hex.substr( 2, 1 ) + hex.substr( 2, 1 ), 16 );
        }

        return rgb;
    },

    HEXToHSV: function(hex){
        var rgb = this.HEXToRGB( hex );
        var hsv = this.RGBToHSV( rgb );
        return hsv;
    },

    /*
     * Tools
     */

    lightOrDark: function () {
        var brightness = (this.RGB().r * 299) 
                       + (this.RGB().g * 587) 
                       + (this.RGB().b * 114);
        brightness = brightness / 255000;
        return ( brightness >= 0.5 ) ? 'light' : 'dark';
    }
}
