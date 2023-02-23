<template>
    <div class="page-artista" :style="{ backgroundImage: 'url(' + artista.fondo + ')'}">
            <div class="mini-info">
                <h1 class="nombre-artista"> {{artista.nombre}}</h1>
                <h3 class="oyentes-artista"> {{ artista.oyentes }}</h3>
            </div>
            <div class = "caja1"></div>
            <div class = "caja2"></div>
        <div class="card-info-artista">
            <h3 class="info-artista">Pais de origen: {{ artista.pais }}
                <p class="genero"> Género: {{ artista.genero }}</p>
                <p class="biografia"> {{ artista.biografia }} </p>
            </h3>
        </div>
        <div class = "lista-canciones-artista">
            <h3 class="canciones-artista"> Algunas de sus canciones: </h3>
            <div>
                <CancionCard v-for=" cancion in canciones" :id = "cancion.id" :nombre="cancion.nombre" :imagen="cancion.imagen" class=" cancion-card-artista"/>
            </div>
        </div>
    </div>
</template>

<script>
import endpoints from '../endpoints';
import CancionCard from '../components/CancionCard.vue';

export default {
    name: 'Artista',

    components:{
        CancionCard
    },

    data(){
        return {
            id: '',
            canciones: [],
            artista: {
                nombre : '',
                pais : '',
                genero : '',
                oyentes: ' ',
                canciones : [],
                imagen : '',
                fondo : ''
            }
        }
    },

    created(){
        window.scroll(0,0);
        this.getArtista()
        this.getCanciones()
    },

    methods: {
        
        getArtista(){
            this.id = this.$route.params.id.toString();
            endpoints.getArtista(this.id).then((artista)=>{
            this.artista = artista
        })
        },
        getCanciones(){
            endpoints.getCancionesList(this.id).then((lista)=>{
                this.canciones = lista.map((cancion)=>{
                    return{
                        ...cancion
                    }
                })
            })
        }
    },
}
</script>


<style>
.page-artista{
    background-size: cover;
    height: 1300px;
    background-attachment: fixed
}

.mini-info{
    text-align: center;
    margin-top: 250px;
}

.nombre-artista{
  margin-top: 20px;
  text-align: center;
  color:  white;
}

.oyentes-artista{
  margin-top: 20px;
  text-align: center;
  color:  white;
  opacity:70%;
}
 
.caja1{
    position: relative;
    top: 300px;
    width: 720px;
    height: 690px;
    background-color: rgb(239, 137, 97);
    opacity: 40%;
}

.caja2{

    position: relative;
    top: -390px;
    left: 720px;
    width: 680px;
    height: 690px;
    background-color: rgb(131, 68, 43);
    opacity: 40%;
}

.card-info-artista{
    position: relative;
    top: -1400px;
    right: -20px;
    width: 680px;
    height: 1000px;
    object-fit: cover;
    overflow: hidden;

} 

.card-pais{
    margin-top: 20px;
}

.info-artista{
    padding: 20px;
    color: white;
    text-shadow:1px 0 10px black;
    width: 640px;
    height: 450px;
    text-align: left;
    margin-top: 400px;
    margin-right: 50px;
}

.genero{

    margin-top: 30px;
}

.biografia{
    margin-top: 30px;
    line-height: 30px;
}

.lista-canciones-artista{
    color: white;
    text-shadow:1px 0 10px black;
    position: relative;
    top: -2000px;
    left: 950px;
}
.canciones-artista{
    
    margin-top: 15px;
}

.cancion-card-artista {
  min-width: 340px;
  padding: 55px;
  transition: 200ms ease;
  cursor: pointer;
}

.cancion-card-artista :hover{
  box-shadow: 0 0 40px rgb(0, 0, 0);
  transform: scale(105%);
}
</style>