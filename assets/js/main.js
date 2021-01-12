let app = new Vue({
  el:"#app",
  data: {
  searchTerm: "",
  filmDocuments: [],
},

methods:{
  getData(){
    axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key:"a1585e4975fa966c97fa497f209af976",
      query:this.searchTerm,
      language: "it-IT"
 }
})
  .then(response => {
    let ritorno = response.data.results
    this.filmDocuments = ritorno
    console.log(ritorno);
    let defoultNumber = response.data.vote_average

    })
   }
  }
}),
