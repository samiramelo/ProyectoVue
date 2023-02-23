<template>
    <div class="page-cancion">
        <div class = "cancion-imagen" :style="{ backgroundImage: 'url(' + cancion.imagen + ')'}"></div>
        <img :src= "getImagen" class="album-imagen" alt="album">
        <div class="info-cancion">
            <h2 class = "cancion-nombre"> {{ cancion.nombre }}</h2>
            <h3 class = "cancion-album"> {{ cancion.album }}</h3>
            <h4 class = "cancion-duracion"> {{ cancion.duracion }}</h4>
        </div>
        <div class="barra-de-reproduccion">
            <img src="../assets/BarraDeReproduccion.png" alt="barra de reproduccion">
        </div>
        <div>
            <h2 class="canciones-del-album">Canciones del album:</h2>
            <div class="list-album">
                <CancionCard @recargar = "recargar" v-for = "cancion in canciones" :id = "cancion.id" :nombre="cancion.nombre" :imagen="cancion.imagen" :signal=true  class=" cancion-card" />
            </div>
        </div>
    </div>
</template>

<script>

import endpoints from '../endpoints';
import CancionCard from '../components/CancionCard.vue';
export default {
    
    name : 'cancion',

    components: {
        CancionCard
    },

    data(){
        return{
            id : '',
            canciones: [],
            cancion : {
                nombre : '',
                duracion : '',
                album: '',
                imagen: ''
            }
        }
    },

    computed: {
        getImagen(){
            let imagen =this.cancion.imagen
            return imagen
        }
    },

    created(){
        window.scroll(0,0);
        this.ids();
        this.getCancion();
        this.getCanciones()
    },

    methods: {
        
        recargar(id){
            this.id = id;
            this.getCancion();
            this.getCanciones()
            window.scroll(0,0);
        },

        ids(){
            return this.id = this.$route.params.id.toString();
        },

        getCancion(){
            endpoints.getCancion(this.id).then((cancion)=>{
            this.cancion = cancion
        })
        },

        getCanciones(){
            endpoints.getAlbum(this.id).then((lista)=>{
                this.canciones = lista.map((cancion)=>{
                    return{
                        ...cancion
                    }
                })
            })
        },
    },

}
</script>

<style >

.cancion-imagen{
    position: relative;
    top: -400px;
    left: -30px;
    height: 700px;
    width: 1460px;
    filter:blur(7px);
    background-size: cover;
}

.album-imagen{
    height: 220px;
    width: 220px;
    position: relative;
    top: -675px;
    left: 400px;
}

.barra-de-reproduccion{
    position: relative;
    top: -875px;
    left: 650px;
}

.barra-de-reproduccion img{
    width: 220px;
}

.info-cancion{
    position: relative;
    top: -780px;
    left: 660px;
    color: black;
    text-shadow: 1px 0 10px rgb(55, 54, 54);
}

.list-album{
    position: relative;
    top: -840px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 80px;
    margin-top: 40px;
}

.canciones-del-album{
    position: relative;
    top: -850px;
}

.cancion-card{
  transition: 200ms ease;
  cursor: pointer;

}

.cancion-card:hover {
  box-shadow: 0 0 40px rgb(0, 0, 0);
  transform: scale(105%);
}

</style>
