Vue.component('product', {
    data: function () {
        return {
            screen_data : screens,  
        }
    },

    props: {
       
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },
    
    template:`
    <div class=container-fluid>
        <div class="row">
            <div class="col-md-4 p-3" v-for="screen in screen_data">
                <div class="row row-col-auto ">
                    <div class="col">
                        <div class="card h-100" style="width: 25rem; padding: 1rem;">
                                <a href="alu-click.html"><img :src="imagePath + screen.path" class="img-responsive"
                                        alt="services-1"></a>
                            <div class="card-body">
                                <h5 class="card-title">{{screen.title}}</h5>
                                <p class="card-text">
                                    <ul v-html="screen.info">
                                        {{screen.info}}
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>                    
            <div>
        <div>
    <div>        
                `
})
Vue.config.devtools = true
Vue.config.productionTip = false