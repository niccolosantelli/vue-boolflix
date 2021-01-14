let app = new Vue({
  el:"#app",
  data: {
  searchTerm: "",
  filmDocuments: [],
  tvSeriesDocuments:[],


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

         this.filmDocuments.forEach(item => {
           const vote = Math.ceil(item.vote_average / 2)
           console.log(vote);
           return item.stellePiene = vote;
         });
        })



      axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key:"a1585e4975fa966c97fa497f209af976",
          query:this.searchTerm,
          language: "it-IT"
     }
    })
      .then(response => {
        let ritorno = response.data.results
        this.tvSeriesDocuments = ritorno
        console.log(ritorno);

          this.tvSeriesDocuments.forEach(item => {
            const vote = Math.ceil(item.vote_average / 2)
            console.log(vote);
            return item.stellePiene = vote;
          });
        })


    }
  }
})
