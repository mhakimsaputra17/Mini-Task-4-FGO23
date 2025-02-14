const movie = {

    id: 1,

    title: "Solo Leveling",
    image: "https://downloaddisiniuiii.com/gambar.png",
    genre: ["Action", "Adventure", "Fantasy"],
    cast: [{
        name: "Taito Ban",
        role: "Main Character"
    },
        {
            name: "Reina Ueda",
            role: "Supporting Character",
        },
        {
            name: "Genta Nakamura",
            role: "Supporting Character"
        }
    ],
    getTitleImageAndGenre: function() {
        console.log("Title", this.title);
        console.log("Image", this.image);
        console.log("Genre", this.genre);
    },
    getCast: function() {
        //console.log(this.cast);
        console.log(this.cast.sort((a, b) => {
          if(a.name <b.name) return -1;
          if(a.name >b.name) return 1;
          return 0;
        }))
    },
    setTitle: function(newTitle) {
        if (typeof newTitle !== "string") return;
        this.title = newTitle;
    },
    setImage: function(newImage) {
        if (typeof newImage !== "string") return;
        this.image = newImage;
    },


}

movie.getTitleImageAndGenre();
// sort by by cast name 
movie.getCast();
movie.setTitle("Overlord");
movie.setImage("https://gambar-random.com");
console.log(movie.title);
console.log(movie.image);
