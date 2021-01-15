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

         /*this.filmDocuments.forEach(item =>{
           const size = "w342"
           const post = "https://image.tmdb.org/t/p/" + size + item.poster_path
           console.log(post);
           return item.poster = post
         })*/

         this.filmDocuments.forEach(item => {
           const base = "https://image.tmdb.org/t/p/w342";
           const linkCopertina = item.poster_path;
           if (item.poster_path) {
             return item.poster = base + linkCopertina;
           }else {
             return item.poster = linkCopertina;
           }



         })


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
          })

          /*this.tvSeriesDocuments.forEach(item =>{
            const size = "w342"
            const post = "https://image.tmdb.org/t/p/" + size + item.poster_path
            console.log(post);
            return item.poster = post
          })*/

          this.tvSeriesDocuments.forEach(item => {
            const base = "https://image.tmdb.org/t/p/w342";
            const linkCopertina = item.poster_path;
            if (item.poster_path) {
              return item.poster = base + linkCopertina
            } else {
              return item.poster = linkCopertina
            }

          })

        })

    }
  }
})
