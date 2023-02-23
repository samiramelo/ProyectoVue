<template>
    <div class="layout">
        <div class="layout__title">
            <RouterLink :to="{ name: 'ArtistasList' }" class="vue__tittle">ProyectoVue</RouterLink>
            <img src="https://regalosoriginalesdecorazon.com/wp-content/uploads/2021/02/spotifyCode.png" class="barra_de_reproduccion">
        </div>
    </div>
</template>

<style >

.layout{
  position: fixed;
  width: 100%;
  box-shadow: 1px 1px 10px 0 rgb(4, 3, 12);
  z-index: 100;
}

.layout__title {
  margin: 0;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(251, 199, 140);
}

.vue__tittle{
  font-weight: bolder;
  color: white;
  font-size: 24px;
  text-decoration: none;   
}

.barra_de_reproduccion{
    height: 90px;
}


nav {
  padding: 12px 30px;
  background-color: darkcyan;
  display: flex;
  justify-content: flex-start;
  color: white;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.vue__tittle {
  text-decoration: none;
  color: white;
}

.vue__tittle:hover {
  color: rgb(0, 0, 0);
  text-shadow: 1px 0px 10px rgb(255, 137, 114);
}

</style>
