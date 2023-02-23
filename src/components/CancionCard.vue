<template >
    <div class = 'carta'>
        <div class="card-cancion" @click="goToCancionDetails">
            <div>
                <img :src="cancionImagen" class = "imagen-cancion" alt="imagen">
            </div>
            <h3 class="card-nombre-cancion"> {{ CancionNombre }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name : "CancionCard",
    props : ['nombre', 'id', 'imagen', 'signal'],

    computed: {
        CancionNombre(){
            let nombre = this.nombre
            return nombre 
        },

        cancionImagen(){
            let imagen = this.imagen
            return imagen
        }
    },
    methods:{
        goToCancionDetails(){
            if(this.signal === true){
                this.$emit('recargar', this.id)
            } else
            {
                this.$router.push({ name: 'cancion' , params: {id: this.id}})
            }
        }
    }
}
</script>

<style>

.card-cancion{
    width: 150px;
    height: 150px;
}
 
.imagen-cancion{

    width: 150px;
    height: 150px;
}
.card-nombre-cancion {
  margin-top: 20px;

}
</style>