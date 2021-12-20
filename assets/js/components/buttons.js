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
        calcTextColor(hexcolor){
            hexcolor = hexcolor.replace("#", "");
            var r = parseInt(hexcolor.substr(0,2),16);
            var g = parseInt(hexcolor.substr(2,2),16);
            var b = parseInt(hexcolor.substr(4,2),16);
            var yiq = ((r*299)+(g*587)+(b*114))/1000;
            return (yiq >= 128) ? 'black' : 'white';
        
          
        },
       
        
        },
    
    
    template:`
    <div class="btn-group">
    <button :style ="{'background-color':[color_data.bGC], 'color': calcTextColor(color_data.bGC)}" @click="addToCart([color_data.id],console.log([color_data.id]))" >{{color_data.name}}</button>
    </div>   
    ` 
    
})
Vue.config.devtools = true
Vue.config.productionTip = false