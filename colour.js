function Colour( format, values ){
    this.models = {
        RGB: [ 0, 0, 0 ],
        HSV: [ 0, 0, 0 ],
        HEX: '#000'
    };

    this.setColour( format, values );
}

Colour.prototype = {
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
        this.models.RGB = [ values[0], values[1], values[2] ];
        this.models.HSV = this.RGBToHSV( this.models.RGB );
        this.models.HEX = this.RGBToHEX( this.models.RGB );
    },

    setHSV: function(values){

    },

    setHEX: function(values){

    },

    RGBToHSV: function(values){
        var r = values[0]/255, g = values[1]/255, b = values[2]/255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
    
        var d = max - min;
        s = max == 0 ? 0 : d / max;
    
        if(max == min){
            h = 0;
        }else{
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        
        return [ h, s, v ];
    },

    RGBToHEX: function(values){
        var colour = '#',
            hr     = ( 0 + values[0].toString(16) ).substr(-2),
            hg     = ( 0 + values[1].toString(16) ).substr(-2),
            hb     = ( 0 + values[2].toString(16) ).substr(-2);

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

    HEX: function(){
        return this.models.HEX;
    }
}
