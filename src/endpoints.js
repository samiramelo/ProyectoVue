import axios from 'axios';

export default{
    getDefaultEndpoint(endpoint) {
        return axios.get(endpoint).then((info) => {
        return info.data
        })
    },

    getArtistasList(){
        return axios.get(`http://localhost:4000/artistas`).then((list) =>{
            return list.data
        }) 
    },

    getArtista(id){
        return axios.get(`http://localhost:4000/artistas/${id}`).then((artista)=>{
            return artista.data
        })
    },

    getCancion(id){
        return axios.get(`http://localhost:4000/canciones/${id}`).then((cancion)=>{
            return cancion.data
        })
    },

    getAlbum(id){
        return axios.get(`http://localhost:4000/canciones/album/${id}`).then((list)=>{
            return list.data
        })
    },

    getCancionesList(id){
        return axios.get(`http://localhost:4000/artistas/canciones/${id}`).then((list)=>{
            return list.data
        })
    }
}