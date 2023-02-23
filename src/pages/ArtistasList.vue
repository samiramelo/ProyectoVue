<template>
  <div class = "pagina-artistas">
    <h1> ARTISTAS  ({{ count }})</h1>
  <div class = "lista-artistas">
      <ArtistaCard v-for="artista in artistasList" :nombre="artista.nombre" :id="artista.id" :imagen = "artista.imagen" :oyentes = "artista.oyentes" class= "list-card-artistas"/>
  </div>

  </div>
</template>


<script>
import endpoints from '../endpoints';
import ArtistaCard from '../components/ArtistaCard.vue';
import Pagination from '../components/Pagination.vue';

export default{
  components: {
    ArtistaCard,
    Pagination
  },

  name: "artistasList",
  data(){
    return{
      count : 0,
      artistasList: [],
    }
  },

  created(){
    window.scroll(0,0);
    this.getArtistasList()

  },

  methods: {
    getArtistasList(){
      let result = endpoints.getArtistasList().then((list)=>{
        this.artistasList = list.map((artista)=>{
          this.count = this.count +1
          return{
            ...artista
          }
        });
        return list
      })
      return result
    },

  }
}

</script>

<style>

.lista-artistas{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 80px;
  margin-top: 40px;
}

.list-card-artistas{
  min-width: 340px;
  padding: 30px;
  transition: 200ms ease;
  cursor: pointer;
}

.list-card-artistas:hover {
  box-shadow: 0 0 40px rgb(0, 0, 0);
  transform: scale(105%);
}

.pagina-artistas{
  background-image: url(https://i.pinimg.com/474x/98/fe/35/98fe35894196c430847b2f32e4b4875a.jpg);
  background-size: cover;
}
</style>