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

    setRGB: function(values){
        this.models.RGB = values;
        this.models.HSV = this.RGBToHSV();
        this.models.HEX = this.RGBToHEX();
    },

    setHSV: function(values){
        this.models.HSV = values;
        this.models.RGB = this.HSVToRGB();
        this.models.HEX = this.HSVToHEX();
    },

    setHEX: function(value){
        this.models.HEV = value;
        this.models.RGB = this.HEXToRGB();
        this.models.HSV = this.HEXToHSV();
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

    RGBToHSV: function(){
        var r = this.models.RGB.r / 255,
            g = this.models.RGB.g / 255,
            b = this.models.RGB.b / 255;
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

    RGBToHEX: function(){
        var colour = '#',
            hr     = ( 0 + this.models.RGB.r.toString(16) ).substr(-2),
            hg     = ( 0 + this.models.RGB.g.toString(16) ).substr(-2),
            hb     = ( 0 + this.models.RGB.b.toString(16) ).substr(-2);

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

    HSVToRGB: function(){

    },

    HSVToHEX: function(){

    },

    HEXToRGB: function(){

    },

    HEXToHSV: function(){

    },
}
