const gptQuery=(props)=>{
    const query = `You are a Movie Recommendation system. Based on the query, provide a list of exactly 5 movie titles that match the query "${props}".
  
    If the query is a specific movie name like "${props}", return all movies that match exactly with that name. If the query is more general (e.g., genre-based like "Indian comedy movies"), list exactly 5 relevant movie names.
    
    If there are many matching movies, just pick any 5. If there are fewer than 5, fill in with other popular or closely related movies until there are exactly 5. 
    
    Only output the names of the movies in a single line, comma-separated, and without any extra text or formatting, and no other names, or explanations..
    
    Examples:
    - Query: "Don" → Output: Don, Don 2, The Don, Baazigar, Sholay
    - Query: "Indian comedy movies" → Output: Hera Pheri, 3 Idiots, Dhamaal, Golmaal, Chup Chup Ke
    
    Query: "${props}"`;

    return query;
}

export default gptQuery;