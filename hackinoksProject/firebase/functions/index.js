'use strict';
const data = [
    {
      "director_name": "James Cameron",
      "genres": "Action|Adventure|Fantasy|Sci-Fi",
      "movie_title": "Avatar",
      "country": "USA",
      "imdb_score": 7.9,
      "image_adress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmTuSGGAygmRQQSV1jk358HRy-utQAf7ezuQbmj6QytABw2xh"
    },
    {
      "director_name": "Gore Verbinski",
      "genres": "Action|Adventure|Fantasy",
      "movie_title": "Pirates of the Caribbean: At World's End",
      "country": "USA",
      "imdb_score": 7.1,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51YP9uqBcML.jpg"
    },
    {
      "director_name": "Sam Mendes",
      "genres": "Action|Adventure|Thriller",
      "movie_title": "Spectre",
      "country": "UK",
      "imdb_score": 6.8,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Spectre_poster.jpg/220px-Spectre_poster.jpg"
    },
    {
      "director_name": "Christopher Nolan",
      "genres": "Action|Thriller",
      "movie_title": "The Dark Knight Rises",
      "country": "USA",
      "imdb_score": 8.5,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51k98elC6mL.jpg"
    },
    {
      "director_name": "Andrew Stanton",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "John Carter",
      "country": "USA",
      "imdb_score": 6.6,
      "image_adress": "https://upload.wikimedia.org/wikipedia/tr/a/aa/John_carter_poster.jpg"
    },
    {
      "director_name": "Sam Raimi",
      "genres": "Action|Adventure|Romance",
      "movie_title": "Spider-Man 3",
      "country": "USA",
      "imdb_score": 6.2,
      "image_adress": "https://www.jposter.net/images/products/b5-spidey3-b.jpg"
    },
    {
      "director_name": "Nathan Greno",
      "genres": "Adventure|Animation|Comedy|Family|Fantasy|Musical|Romance",
      "movie_title": "Tangled",
      "country": "USA",
      "imdb_score": 7.8,
      "image_adress": "https://ae01.alicdn.com/kf/HTB1j9H7lL6TBKNjSZJiq6zKVFXaa/Custom-Canvas-Wall-Decor-Tangled-Poster-Tangled-Wall-Stickers-Mural-Cartoon-Movie-Wallpaper-Kids-Bedroom-Decoration.jpg"
    },
    {
      "director_name": "Joss Whedon",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Avengers: Age of Ultron",
      "country": "USA",
      "imdb_score": 7.5,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/719S7I-%2ByBL._SY679_.jpg"
    },
    {
      "director_name": "Mike Newell",
      "genres": "Action|Adventure|Fantasy|Romance",
      "movie_title": "Prince of Persia: The Sands of Time",
      "country": "USA",
      "imdb_score": 6.6,
      "image_adress": "https://i.pinimg.com/736x/e9/90/9f/e9909f19836e1e8ce285670edf71367c.jpg"
    },
    {
      "director_name": "Guillermo del Toro",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Pacific Rim",
      "country": "USA",
      "imdb_score": 7,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51oN05yMs3L.jpg"
    },
    {
      "director_name": "Michael Bay",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Transformers: Dark of the Moon",
      "country": "USA",
      "imdb_score": 6.3,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/71m2EvCgzsL._SY679_.jpg"
    },
    {
      "director_name": "Steven Spielberg",
      "genres": "Action|Adventure|Fantasy",
      "movie_title": "Indiana Jones and the Kingdom of the Crystal Skull",
      "country": "USA",
      "imdb_score": 6.2,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51Aii-t3CPL.jpg"
    },
    {
      "director_name": "Dan Scanlon",
      "genres": "Adventure|Animation|Comedy|Family|Fantasy",
      "movie_title": "Monsters University",
      "country": "USA",
      "imdb_score": 7.3,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/71yl-3ttgjL._SY606_.jpg"
    },
    {
      "director_name": "John Lasseter",
      "genres": "Adventure|Animation|Comedy|Family|Sport",
      "movie_title": "Cars 2",
      "country": "USA",
      "imdb_score": 6.3,
      "image_adress": "https://www.movieartarena.com/imgs/cars2ib.jpg"
    },
    {
      "director_name": "Lee Unkrich",
      "genres": "Adventure|Animation|Comedy|Family|Fantasy",
      "movie_title": "Toy Story 3",
      "country": "USA",
      "imdb_score": 8.3,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/519fFTj6QnL.jpg"
    },
    {
      "director_name": "Peter Sohn",
      "genres": "Adventure|Animation|Comedy|Family|Fantasy",
      "movie_title": "The Good Dinosaur",
      "country": "USA",
      "imdb_score": 6.8,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/71WozAG2FqL._SY679_.jpg"
    },
    {
      "director_name": "Mark Andrews",
      "genres": "Adventure|Animation|Comedy|Family|Fantasy",
      "movie_title": "Brave",
      "country": "USA",
      "imdb_score": 7.2,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51zXp3R9dpL.jpg"
    },
    {
      "director_name": "Andrew Stanton",
      "genres": "Adventure|Animation|Family|Sci-Fi",
      "movie_title": "WALL·E",
      "country": "USA",
      "imdb_score": 8.4,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/61dCcxXxZpL._SY679_.jpg"
    },
    {
      "director_name": "Robert Zemeckis",
      "genres": "Adventure|Animation|Family|Fantasy",
      "movie_title": "The Polar Express",
      "country": "USA",
      "imdb_score": 6.6,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51tg0f4ZBvL.jpg"
    },
    {
      "director_name": "Guy Ritchie",
      "genres": "Action|Adventure|Crime|Mystery|Thriller",
      "movie_title": "Sherlock Holmes: A Game of Shadows",
      "country": "USA",
      "imdb_score": 7.5,
      "image_adress": "https://cdn.cinematerial.com/p/500x/ow2zt23i/sherlock-holmes-a-game-of-shadows-singaporean-movie-poster.jpg"
    },
    {
      "director_name": "Justin Lin",
      "genres": "Action|Crime|Thriller",
      "movie_title": "Fast Five",
      "country": "USA",
      "imdb_score": 7.3,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51mEFUtA%2BnL.jpg"
    },
    {
      "director_name": "Michael Bay",
      "genres": "Action|Comedy|Crime|Thriller",
      "movie_title": "Bad Boys II",
      "country": "USA",
      "imdb_score": 6.6,
      "image_adress": "https://d9nvuahg4xykp.cloudfront.net/-2286737984952594868/7269339496650841971.jpg"
    },
    {
      "director_name": "Phillip Noyce",
      "genres": "Action|Crime|Mystery|Thriller",
      "movie_title": "Salt",
      "country": "USA",
      "imdb_score": 6.4,
      "image_adress": "https://cdn.cinematerial.com/p/500x/bnqlmfyg/salt-malaysian-movie-poster.jpg"
    },
    {
      "director_name": "Joe Carnahan",
      "genres": "Action|Adventure|Crime",
      "movie_title": "The A-Team",
      "country": "USA",
      "imdb_score": 7.6,
      "image_adress": "https://www.joblo.com/assets/images/oldsite/posters/images/full/ateam-poster-german.jpg"
    },
    {
      "director_name": "Dominic Sena",
      "genres": "Action|Crime|Thriller",
      "movie_title": "Gone in Sixty Seconds",
      "country": "USA",
      "imdb_score": 6.5,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/41YAHQB6WCL.jpg"
    },
    {
      "director_name": "Michael Mann",
      "genres": "Biography|Crime|Drama|History|Romance",
      "movie_title": "Public Enemies",
      "country": "USA",
      "imdb_score": 7,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51RfXF-NOCL.jpg"
    },
    {
      "director_name": "Ridley Scott",
      "genres": "Biography|Crime|Drama",
      "movie_title": "American Gangster",
      "country": "USA",
      "imdb_score": 7.8,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/41nyPPJah-L.jpg"
    },
    {
      "director_name": "Tony Scott",
      "genres": "Action|Crime|Thriller",
      "movie_title": "The Taking of Pelham 1 2 3",
      "country": "USA",
      "imdb_score": 6.4,
      "image_adress": "https://i.ebayimg.com/images/g/epUAAOSwgHZYCpP-/s-l640.jpg"
    },
    {
      "director_name": "Adam McKay",
      "genres": "Action|Comedy|Crime",
      "movie_title": "The Other Guys",
      "country": "USA",
      "imdb_score": 6.7,
      "image_adress": "https://cdn.cinematerial.com/p/500x/lpqj0c9x/the-other-guys-dvd-cover.jpg"
    },
    {
      "director_name": "Tim Burton",
      "genres": "Comedy|Fantasy|Horror",
      "movie_title": "Dark Shadows",
      "country": "USA",
      "imdb_score": 6.2,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51O0uRSTr-L._SY445_.jpg"
    },
    {
      "director_name": "James L. Brooks",
      "genres": "Comedy|Drama|Romance",
      "movie_title": "How Do You Know",
      "country": "USA",
      "imdb_score": 5.3,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/How_Do_You_Know_Poster.jpg/220px-How_Do_You_Know_Poster.jpg"
    },
    {
      "director_name": "Dean Parisot",
      "genres": "Comedy|Crime",
      "movie_title": "Fun with Dick and Jane",
      "country": "USA",
      "imdb_score": 6.1,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/510NG4K70AL._SY445_.jpg"
    },
    {
      "director_name": "Jay Roach",
      "genres": "Comedy",
      "movie_title": "The Campaign",
      "country": "USA",
      "imdb_score": 6.2,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Campaign_film_poster.jpg/220px-Campaign_film_poster.jpg"
    },
    {
      "director_name": "Ron Howard",
      "genres": "Comedy|Family|Fantasy",
      "movie_title": "How the Grinch Stole Christmas",
      "country": "USA",
      "imdb_score": 6,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/81cY8XO-G2L._SY445_.jpg"
    },
    {
      "director_name": "Nancy Meyers",
      "genres": "Comedy|Romance",
      "movie_title": "The Holiday",
      "country": "USA",
      "imdb_score": 6.9,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg"
    },
    {
      "director_name": "Chris Columbus",
      "genres": "Comedy|Drama|Sci-Fi",
      "movie_title": "Bicentennial Man",
      "country": "USA",
      "imdb_score": 6.8,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Bicentennial_man_film_poster.jpg/215px-Bicentennial_man_film_poster.jpg"
    },
    {
      "director_name": "Doug Walker",
      "genres": "Documentary",
      "movie_title": "Star Wars: Episode VII - The Force Awakens",
      "country": "USA",
      "imdb_score": 7.1,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"
    },
    {
      "director_name": "Jacques Perrin",
      "genres": "Documentary|Drama",
      "movie_title": "Oceans",
      "country": "France",
      "imdb_score": 7.8,
      "image_adress": "https://filmsfortheearth.org/storage/app/media/filmsdb/covers/Cover-oceans-FR.jpg"
    },
    {
      "director_name": "Jacques Perrin",
      "genres": "Documentary",
      "movie_title": "Winged Migration",
      "country": "France",
      "imdb_score": 8,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51FSQ6AH0QL._SY445_.jpg"
    },
    {
      "director_name": "Ridley Scott",
      "genres": "Action|Adventure|Drama|History",
      "movie_title": "Robin Hood",
      "country": "USA",
      "imdb_score": 6.7,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Robin_Hood_2010_poster.jpg/220px-Robin_Hood_2010_poster.jpg"
    },
    {
      "director_name": "Oliver Stone",
      "genres": "Action|Adventure|Biography|Drama|History|Romance|War",
      "movie_title": "Alexander",
      "country": "Germany",
      "imdb_score": 5.5,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/AlexanderPoster.jpg/220px-AlexanderPoster.jpg"
    },
    {
      "director_name": "Peter Weir",
      "genres": "Action|Adventure|Drama|History|War",
      "movie_title": "Master and Commander: The Far Side of the World",
      "country": "USA",
      "imdb_score": 7.4,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Master_and_Commander-The_Far_Side_of_the_World_poster.png/220px-Master_and_Commander-The_Far_Side_of_the_World_poster.png"
    },
    {
      "director_name": "John McTiernan",
      "genres": "Action|Adventure|History",
      "movie_title": "The 13th Warrior",
      "country": "USA",
      "imdb_score": 6.6,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BNDZhZDk0ZTktZmNhMC00YTU1LWEwY2YtZmIyMWM5MTNlNDEwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"
    },
    {
      "director_name": "Roland Emmerich",
      "genres": "Action|Drama|History|War",
      "movie_title": "The Patriot",
      "country": "USA",
      "imdb_score": 7.1,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51TiXRZCo7L._SY445_.jpg"
    },
    {
      "director_name": "Ridley Scott",
      "genres": "Action|Adventure|Drama|History|War",
      "movie_title": "Kingdom of Heaven",
      "country": "USA",
      "imdb_score": 7.2,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/KoHposter.jpg/220px-KoHposter.jpg"
    },
    {
      "director_name": "Michael Mann",
      "genres": "Biography|Crime|Drama|History|Romance",
      "movie_title": "Public Enemies",
      "country": "USA",
      "imdb_score": 7,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/PEPOSTERsm.jpg/220px-PEPOSTERsm.jpg"
    },
    {
      "director_name": "Anthony Russo",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Captain America: Civil War",
      "country": "USA",
      "imdb_score": 8.2,
      "image_adress": "https://resim.fullhdfilmizlesene.net/mdsresim_izle/fullhd-kaptan-amerika-ic-savas-captain-america-civil-war.jpg?0.6144034223211099"
    },
    {
      "director_name": "Peter Berg",
      "genres": "Action|Adventure|Sci-Fi|Thriller",
      "movie_title": "Battleship",
      "country": "USA",
      "imdb_score": 5.9,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Battleship_Poster.jpg/220px-Battleship_Poster.jpg"
    },
    {
      "director_name": "Colin Trevorrow",
      "genres": "Action|Adventure|Sci-Fi|Thriller",
      "movie_title": "Jurassic World",
      "country": "USA",
      "imdb_score": 7,
      "image_adress": "https://sillykhan.files.wordpress.com/2015/06/jurassic-world-mp.jpg"
    },
    {
      "director_name": "Sam Mendes",
      "genres": "Action|Adventure|Thriller",
      "movie_title": "Skyfall",
      "country": "UK",
      "imdb_score": 7.8,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
    },
    {
      "director_name": "Michael Bay",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Transformers: Revenge of the Fallen",
      "country": "USA",
      "imdb_score": 6,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/TF2SteelPoster.jpg/220px-TF2SteelPoster.jpg"
    },
    {
      "director_name": "Michael Bay",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Transformers: Age of Extinction",
      "country": "USA",
      "imdb_score": 5.7,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51bUg6KN%2BTL._SY445_.jpg"
    },
    {
      "director_name": "Marc Forster",
      "genres": "Action|Adventure|Horror|Sci-Fi|Thriller",
      "movie_title": "World War Z",
      "country": "USA",
      "imdb_score": 7,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/World_War_Z_poster.jpg/220px-World_War_Z_poster.jpg"
    },
    {
      "director_name": "Bryan Singer",
      "genres": "Action|Adventure|Fantasy|Sci-Fi|Thriller",
      "movie_title": "X-Men: Days of Future Past",
      "country": "USA",
      "imdb_score": 8,
      "image_adress": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4856/4856507_sa.jpg;maxHeight=640;maxWidth=550"
    },
    {
      "director_name": "J.J. Abrams",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Star Trek Into Darkness",
      "country": "USA",
      "imdb_score": 7.8,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/91U%2BmB-9ZFL._SY445_.jpg"
    },
    {
      "director_name": "Guillermo del Toro",
      "genres": "Action|Adventure|Sci-Fi",
      "movie_title": "Pacific Rim",
      "country": "USA",
      "imdb_score": 7,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/2/2e/Pacificrim2-poster.jpg"
    },
    {
      "director_name": "Gavin Hood",
      "genres": "Action|Adventure|Fantasy|Sci-Fi|Thriller",
      "movie_title": "X-Men Origins: Wolverine",
      "country": "USA",
      "imdb_score": 6.7,
      "image_adress": "https://images-na.ssl-images-amazon.com/images/I/51NrABEKXsL._SY445_.jpg"
    },
    {
      "director_name": "Brett Ratner",
      "genres": "Action|Adventure|Fantasy|Sci-Fi|Thriller",
      "movie_title": "X-Men: The Last Stand",
      "country": "Canada",
      "imdb_score": 6.8,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/X-Men_The_Last_Stand_theatrical_poster.jpg/220px-X-Men_The_Last_Stand_theatrical_poster.jpg"
    },
    {
      "director_name": "Christopher McQuarrie",
      "genres": "Action|Adventure|Thriller",
      "movie_title": "Mission: Impossible - Rogue Nation",
      "country": "China",
      "imdb_score": 7.4,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_.jpg"
    },
    {
      "director_name": "J.J. Abrams",
      "genres": "Action|Adventure|Thriller",
      "movie_title": "Mission: Impossible III",
      "country": "USA",
      "imdb_score": 6.9,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
      "director_name": "Roland Emmerich",
      "genres": "Action|Drama|Thriller",
      "movie_title": "White House Down",
      "country": "USA",
      "imdb_score": 6.4,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BMTAyNzQyNTcwNjVeQTJeQWpwZ15BbWU3MDAwOTQ4Nzk@._V1_.jpg"
    },
    {
      "director_name": "Roger Spottiswoode",
      "genres": "Action|Adventure|Thriller",
      "movie_title": "Tomorrow Never Dies",
      "country": "UK",
      "imdb_score": 6.5,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BMTM1MTk2ODQxNV5BMl5BanBnXkFtZTcwOTY5MDg0NA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      "director_name": "Jon M. Chu",
      "genres": "Action|Adventure|Sci-Fi|Thriller",
      "movie_title": "G.I. Joe: Retaliation",
      "country": "USA",
      "imdb_score": 5.8,
      "image_adress": "https://m.media-amazon.com/images/M/MV5BNzk5ODM0OTQ0N15BMl5BanBnXkFtZTcwODg2ODE4OA@@._V1_.jpg"
    },
    {
      "director_name": "Breck Eisner",
      "genres": "Action|Adventure|Comedy|Thriller",
      "movie_title": "Sahara",
      "country": "UK",
      "imdb_score": 6,
      "image_adress": "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Sahara_poster.JPG/220px-Sahara_poster.JPG"
    }
  ]
  const howToTell1 = [
    'Bugün ',
    'Sana ',
    'Favori filmim ',
    'Senin için seçtiğim film: ',
    'Piyangodan ',
    'Maymun '
]
const howToTell2 = [
    ' filmini izleyebilirsin.',
    ' filmini öneriyorum.',
    ' filmini şiddetle tavsiye ederim!',
    '. İyi seyirler!',
    ' çıktı!', 
    ' filmini seçti.'
]

  var actionMovies = [];
  var dramaMovies = [];
  var comedyMovies = [];
  var sciFiMovies = [];
  var horrorMovies = [];
  var crimeMovies = [];
  var documentaryMovies = [];
  var animationMovies = [];
  var fallbackcount = 0;
  var kararsizcount = 0;
  var helpCount = 0;
  var arr1 = [];
  var repeatWord = "";
  var gen = '';
  
  const girisVaryasyonUnknown = [
    'Hoşgeldin. Sana film önermek için buradayım. Bana ne tür bir film istediğini söylebilir ya da duygularını anlatabilirsin.',
    'Merhaba. Bana nasıl hissettiğini ya da ne tür filmlerden hoşlandığını söylersen bildiğim onlarca film arasından sana öneride bulunabilirim.',
  ]

  const girisVaryasyonKnown = [
    'Seni tekrar görmek çok güzel. Nasıl bir film izlemek istersin?',
    'Merhaba. Bugün kendini nasıl hissediyorsun? Modun için bir film önerebilirim.',
    'Hoşgeldin! Sana film önermek için sabırsızlanıyorum. Bu sefer ne tür istersin?'
  ]
  const fallbacks = [
      'Ne dediğini yakalayamadım. Ne tür bir film istediğini tekrar edebilir misin? ',
      'Kendini nasıl hissettiğini söylersen, moduna göre film önerebilirim.',
      'Sana bir film önermek isterdim, bana nasıl hissettiğini ya da ne tür filmlerden hoşlandığını söyleyebilirsin.',
      'Maalesef seni anlayamıyorum. Tekrar görüşmek üzere.'
  ]

  const kararsiz = [
    'Senin için rastgele bir film seçmemi ister misin?',
      'Komedi, dram, aksiyon gibi bir türden rastgele film seçebilirim.',
      'Sana ruh haline göre bir film önerebilirim. Nasıl hissediyorsun?'
  ]
  data.find(function(movie){
    
    if(movie.genres.includes("Action") || movie.genres.includes("Adventure")){
        actionMovies.push(movie);
    }
    if(movie.genres.includes("Drama")){
        dramaMovies.push(movie);
    }
    if(movie.genres.includes("Comedy")){
        comedyMovies.push(movie);
    }
    if(movie.genres.includes("Sci-Fi")){
        sciFiMovies.push(movie);
    }
    if(movie.genres.includes("Thriller")){
        horrorMovies.push(movie);
    }
    if(movie.genres.includes("Crime")){
        crimeMovies.push(movie);
    }
    if(movie.genres.includes("Documentary") || movie.genres.includes("History")){
        documentaryMovies.push(movie);
    }
    if(movie.genres.includes("Animation")){
        animationMovies.push(movie);
    }
})
// Import the Dialogflow module from the Actions on Google client library.
const {
    dialogflow,
    Permission,
    Suggestions,
    List,
    Image,
    BasicCard
  } = require('actions-on-google');
// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

app.intent('karsilama', (conv) => {
    fallbackcount = 0;
    conv.ask(new Permission({
        context: 'Selam! Seni daha iyi tanımam için ',
        permissions: 'NAME'
      }));
    
     
 });
 app.intent('noinput', (conv) => {
    const audioSound = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
    conv.ask(`<speak> <audio src="${audioSound}"></audio>   Orada mısın? </speak>`);
     
 });

 app.intent('repeat', (conv) => {
    fallbackcount = 0;
    conv.ask(repeatWord);
     
 });
 
 app.intent('kararsiz_intent', (conv) => {
    fallbackcount = 0;
   conv.ask(kararsiz[(kararsizcount++) % 3]);
});
app.intent('neyimben', (conv) => {
    fallbackcount = 0;
    if(helpCount % 2 == 0){
      repeatWord = "Ben, film tavsiyeleri alabileceğin, onlar hakkında bilgi edinebileceğin bir asistan uygulamasıyım." +  
    "İzlemek istediğin film türünü ya da ruh halini söylersen sana kendimi kanıtlayabilirim.";
      helpCount++;
    }
    else{
      repeatWord = "Hangi filmi izleyeceğine karar veremiyorsan doğru yerdesin. Bana hangi türlerden hoşlandığını ya da nasıl hissettiğini söylemen yeterli.";
      helpCount++;
    }
    
   conv.ask(repeatWord);
});

 app.intent('film sec', (conv, {movieGenre}) => {
    fallbackcount = 0;
    var arr = [];
    if (conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {    // karosel gosterecek
        
        
        if(movieGenre == "komedi"){
            gen = 'Komedi';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%comedyMovies.length;
                arr.push(comedyMovies[index]);}
        }
        else if(movieGenre == "aksiyon"){
            gen = 'Aksiyon';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%actionMovies.length;
                arr.push(actionMovies[index]);}
                }
        else if(movieGenre == "dram"){
            gen = 'Dram';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%dramaMovies.length;
                arr.push(dramaMovies.pop(index));}
                }
        else if(movieGenre == "animasyon"){
            gen = 'Animasyon';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%animationMovies.length;
                arr.push(animationMovies.pop(index));}
                }
        else if(movieGenre == "korku"){
            gen = 'Korku';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%horrorMovies.length;
                arr.push(horrorMovies.pop(index));}
                }
        else if(movieGenre == "polisiye"){
            gen = 'Polisiye';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%crimeMovies.length;
                arr.push(crimeMovies.pop(index));}
                }
        else if(movieGenre == "bilimkurgu"){
            gen = 'Bilim Kurgu';
            for(var i = 0; i < 4; i++){
                var index = parseInt(Math.random()*100000)%sciFiMovies.length;
                arr.push(sciFiMovies.pop(index));}
        }
        conv.ask(new List({
            title: 'İşe senin için seçtiğim birkaç ' + gen + ' filmi : ',
            items: {
              // Add the first item to the list
              'SELECTION_KEY_ONE': {    
                title: arr[0].movie_title,
                description: 'IMDb Rate: ' + arr[0].imdb_score ,
                image: new Image({
                  url: arr[0].image_adress,
                  alt: 'Poster',
                }),
              },
              'SELECTION_KEY_TWO': {
                title: arr[1].movie_title,
                description: 'IMDb Rate: ' + arr[1].imdb_score ,
                image: new Image({
                  url: arr[1].image_adress,
                  alt: 'Poster',
                }),
              },
              'SELECTION_KEY_THREE': {
                
                title: arr[2].movie_title,
                description: 'IMDb Rate: ' + arr[2].imdb_score ,
                image: new Image({
                  url: arr[2].image_adress,
                  alt: 'Poster',
                }),
              },

              'SELECTION_KEY_FOUR': {
                
                title: arr[3].movie_title,
                description:'IMDb Rate: ' + arr[3].imdb_score ,
                image: new Image({
                  url: arr[3].image_adress,
                  alt: 'Poster',
                }),
              },
            },
          }));
        repeatWord = 'İstediğin filme tıklayarak detaylı bakabilirsin!';
        arr1 = arr;
        conv.close(repeatWord);
        }
    else{
    var waysToTell = parseInt(Math.random()*123) % 7;
    if(movieGenre == "komedi"){
        repeatWord = howToTell1[waysToTell] + comedyMovies[parseInt(Math.random()*100000)%comedyMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
    }
    else if(movieGenre == "aksiyon"){
        repeatWord = howToTell1[waysToTell] + actionMovies[parseInt(Math.random()*100000)%actionMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
           }
    else if(movieGenre == "dram"){
        repeatWord = howToTell1[waysToTell] + dramaMovies[parseInt(Math.random()*100000)%dramaMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
         }
    else if(movieGenre == "animasyon"){
        repeatWord = howToTell1[waysToTell] + animationMovies[parseInt(Math.random()*100000)%animationMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
           }
    else if(movieGenre == "korku"){
        repeatWord = howToTell1[waysToTell] + horrorMovies[parseInt(Math.random()*100000)%horrorMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
          }
    else if(movieGenre == "polisiye"){
        repeatWord = howToTell1[waysToTell] + crimeMovies[parseInt(Math.random()*100000)%crimeMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
         }
    else if(movieGenre == "bilimkurgu"){
        repeatWord = howToTell1[waysToTell] + sciFiMovies[parseInt(Math.random()*100000)%sciFiMovies.length].movie_title +howToTell2[waysToTell] + ' Görüşmek üzere ';
         }
    else{
        repeatWord = 'Üzgünüm, eşleşen film bulunamadı. Tekrar görüşmek dileğiyle!';
        }
        if(conv.data.userName){
           conv.close( `${repeatWord}, ${conv.data.userName}.`);
        }
        else{
            conv.close(repeatWord);
        } 
    }
    
});

app.intent('kararsiz_intent - yes', (conv) =>{
    var m = data[parseInt(Math.random()*100000)%data.length];
    fallbackcount = 0;
    repeatWord = 'Gözlerim kapalı seçtim: ' + m.movie_title;
    conv.ask(repeatWord);
    if (conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')){
    conv.ask(new BasicCard({
        subtitle: "Genre: " +  m.genres + " - Director: " + m.director_name + " - Country: " + m.country,
        title: m.movie_title,
       
        image: new Image({
          url: m.image_adress,
          alt: 'Poster',
        }),
        display: 'CROPPED',
      }));
    }
    conv.close(' İyi seyirler, arayı açma!');
});

app.intent('no_match_intent', (conv) =>{
    if(fallbackcount < 3){
        repeatWord = fallbacks[fallbackcount++];
        conv.ask(repeatWord);
    }
    else{
      console.log(fallbackcount);
        conv.close(fallbacks[fallbackcount]);
    }
});

app.intent('kararsiz_intent - no', (conv) =>{
    conv.close('Sana yardımcı olamadığım için üzgünüm, tekrar görüşmek dileğiyle!');
});



app.intent('duygusal_intent', (conv, {emotion}) => {
    fallbackcount = 0;
    
    if(emotion == "mutlu"){
        repeatWord = 'Mutluluğunu paylaşıyorum! Kendini ' + emotion + ' hissediyorsan: ' + comedyMovies[parseInt(Math.random()*100000)%comedyMovies.length].movie_title + ' tam sana göre!';
        
    }
    else if(emotion == "kararsız"){
        repeatWord = 'Kararsız kalma! Ben senin için seçtim: ' + data[parseInt(Math.random()*100000)%data.length].movie_title
        
    }
    else if(emotion == "mutsuz"){
        repeatWord = 'Mutsuzluğun beni üzdü. Kendini ' + emotion + ' hissediyorsan: ' + dramaMovies[parseInt(Math.random()*100000)%dramaMovies.length].movie_title + ' tam sana göre!';
        
    }
    else if(movieGenre == "yorgun"){
        repeatWord = 'Kendini ' + emotion + ' hissediyorsan: ' + actionMovies[parseInt(Math.random()*100000)%actionMovies.length].movie_title + ' tam sana göre!';
    }
    else{
        repeatWord = 'üzgünüm, hislerine tercüman bir film bulamadım :( ';
        conv.ask(repeatWord);
    }
    if(conv.data.userName){
        conv.close( `${repeatWord}, ${conv.data.userName}, tekrar görüşmek üzere.`);
     }
     else{
         conv.close(repeatWord + ' tekrar görüşmek üzere.');
     }  
});

app.intent('actions_intent_PERMISSION', (conv, params, permissionGranted) => {
  fallbackcount = 0;
    if (!permissionGranted) {
        repeatWord = girisVaryasyonUnknown[parseInt(Math.random() * 100) % 2];
      conv.ask(repeatWord);
      conv.ask(new Suggestions('Komedi', 'Dram', 'Aksiyon', 'Mutlu', 'Üzgün'));
    } else {
      conv.data.userName = conv.user.name.display;
      var randNum = parseInt(Math.random() * 100) % 3;
      repeatWord = girisVaryasyonKnown[randNum];
      if(randNum == 0){
         conv.ask(`${conv.data.userName}, ${repeatWord}`);
         conv.ask(new Suggestions('Komedi', 'Dram', 'Aksiyon', 'Mutlu', 'Üzgün'));
      }
      else if(randNum == 1){

        conv.ask(`${conv.data.userName}, ${repeatWord}`);
        conv.ask(new Suggestions('Mutlu', 'Üzgün', 'Karmaşık'));
      }
      else{
         conv.ask(`${conv.data.userName}, ${repeatWord}`);
         conv.ask(new Suggestions('Komedi', 'Dram', 'Aksiyon'));
      }
    }
  });
  
  app.intent('actions.intent.OPTION', (conv, params, option) => {
    let response = 'Hiç seçim yapmadın. ';
    if (option) {
        console.log(option);
        if(option == 'SELECTION_KEY_ONE'){
            conv.ask('İşte seçtiğin filmin detaylı bilgileri. İyi eğlenceler! ');
            conv.close(new BasicCard({
            subtitle: arr1[0].genres + " - Director: " + arr1[0].director_name + " - Country: " + arr1[0].country,
            title: arr1[0].movie_title,
            image: new Image({
              url: arr1[0].image_adress,
              alt: 'Poster',
            }),
            display: 'CROPPED',
          }));
        }
        else if(option == 'SELECTION_KEY_TWO'){
            conv.ask('İşte seçtiğin filmin detaylı bilgileri. Keyifli seyirler! ');
            conv.close(new BasicCard({
            subtitle:"Genre: " +  arr1[1].genres + " - Director: " + arr1[1].director_name + " - Country: " + arr1[1].country,
            title: arr1[1].movie_title,
            image: new Image({
              url: arr1[1].image_adress,
              alt: 'Poster',
            }),
            display: 'CROPPED',
          }));
        }
        else if(option == 'SELECTION_KEY_THREE'){
            conv.ask('İşte seçtiğin filmin detaylı bilgileri. İyi seyirler, mısırını unutma! ');
            conv.close(new BasicCard({
            subtitle: arr1[2].genres + " - Director: " + arr1[2].director_name + " - Country: " + arr1[2].country,
            title: arr1[2].movie_title,
            image: new Image({
              url: arr1[2].image_adress,
              alt: 'Poster',
            }),
            display: 'CROPPED',
          }));
        }
        else if(option === 'SELECTION_KEY_FOUR'){
            conv.ask('İşte seçtiğin filmin detaylı bilgileri. İyi seyirler, özletme! ');
            conv.close(new BasicCard({
            subtitle: arr1[3].genres + " - Director: " + arr1[3].director_name + " - Country: " + arr1[3].country,
            title: arr1[3].movie_title,
            image: new Image({
              url: arr1[3].image_adress,
              alt: 'Poster',
            }),
            display: 'CROPPED',
            
          }));
        }
        else {
            conv.close(response); 
        }
    }
    else{
        conv.close(response);
    }
   
  });
// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);