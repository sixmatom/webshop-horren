Vue.component('buttonstyle', {
    data: function () {
        return {
            
        }
         
    },

    props: {
        color_data: {},
        
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        },
        calcTextColor(hex) {
            let threshold = 130; // about 256/2 - lower values results into darker text on dark background
            let colorBrightness = ((hexToRed(hex) * 299) + (hexToGreen(hex) * 587) + (hexToBlue(hex) * 114)) / 1000;
          
            function cleanHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
            function hexToRed(h) {return parseInt((cleanHex(h)).substring(0,2),16)}
            function hexToGreen(h) {return parseInt((cleanHex(h)).substring(2,4),16)}
            function hexToBlue(h) {return parseInt((cleanHex(h)).substring(4,6),16)}
          
            return (colorBrightness > threshold) ? "#000000" : "#ffffff"	
          
        },
       
        
        },
    
    
    template:`
    <div class="btn-group">
    <button :style ="{'background-color':[color_data.bGC], 'color': calcTextColor(toString([color_data.bGC]))}" @click="addToCart([color_data.id],console.log([color_data.id]))" >{{color_data.name}}</button>
       ` 
    
})