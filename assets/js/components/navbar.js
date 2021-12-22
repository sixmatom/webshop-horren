Vue.component("tom-nav-bar",{
    data: function () {
        return {
            
        }
    },

    props: {

    },
    

    methods:{
        
            addToCart(id) {
                this.$root.$emit('add-to-cart', id)
            }
        

    },

    template:`
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid ">
        <a class="navbar-brand" href="index.html">Horren en raamdecoratie </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="col-1lapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Raamdecoratie</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Prijzen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="horren.html">Horren</a>
                </li>
                <li>
                    <shopping-cart></shopping-cart>
                </li>

            </ul>
            
        </div>
    </div>

</nav>
    
                `
})
Vue.config.devtools = true
Vue.config.productionTip = false