Vue.component('product', {
    data: function () {
        return {
            
        }
    },

    props: {
        color_data: {},
        screen_data: {},
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },
    
    template:`
    <div class="btn-group">
    <button :style ="{'background-color':[color_data.bGC]}"style="color:darkgreen" @click="addToCart([color_data.id],console.log([color_data.id]))" >{{color_data.name}}</button>
        
    </div>
    <div class="card">
    <img :src="imagePath + screen_data.path" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{ screen_data.name }}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div>
</div>`,
})