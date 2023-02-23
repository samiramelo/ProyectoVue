<template>
    <div class="card-artista" @click="goToArtistaDetails">
        <div class="card-imagen-artista">
            <img :src= "ArtistaImagen" class = "card-img-artista" :alt="imagen">
        </div>
        <h2 class = "card-nombre-artista">{{ ArtistaNombre}}</h2>
        <h4 class = "card-oyentes-artista"> {{ ArtistaOyentes }} </h4>
    </div>
</template>

<script>

import capitalize from '../formatters'

export default {
    name : "ArtistaCard",
    props : ['nombre', 'id', 'imagen', 'oyentes'],

    computed: {
        ArtistaNombre(){
            let nombre = this.nombre
            return nombre //capitalize(this.nombre)
        },
        ArtistaImagen(){
            let imagen = this.imagen
            return imagen
        },
        ArtistaOyentes(){
            let oyentes = this.oyentes
            return oyentes
        }
    },

    methods: {
        goToArtistaDetails() {
            this.$router.push({ name: 'artista', params : {id: this.id}})
        }

    }
};
</script>

<style>
.card-imagen-artista {
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  display: block;
  margin: auto;
}

.card-img-artista{
  width: 400px;
  height: 400px;
  
}

.card-nombre-artista {
  margin-top: 50px;
  text-align: center;
}
.card-artista{
    width: 300px;
    height: 500px;
}
.card-oyentes-artista{
  margin-top: 50px;
  text-align: center;
  opacity: 50%;
}

</style>