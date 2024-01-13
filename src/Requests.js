const API_KEY = "42935d2607fa14a25758327a824435e1";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,

};

export default requests;