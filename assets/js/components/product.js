Vue.component('product', {
    data: function () {
        return {
            
        }
    },

    props: {
        screen_data: {},
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },
    
    template:`
    <div class=container-fluid>
                
                    <div class="row row-col-auto ">
                        <div class="col">
                            <div class="card h-100" style="width: 25rem; padding: 1rem;">
                                <a href="alu-click.html"><img :src="imagePath + screen_data.path"class="img-responsive"
                                        alt="services-1"></a>
                                <div class="card-body">
                                    <h5 class="card-title">{{screen_data.title}}</h5>
                                    <p class="card-text">
                                        <ul>
                                            {{screen_data.info}}
                                        </ul>
                                    </p>

                                </div>
                            </div>
                        </div>

    `
})