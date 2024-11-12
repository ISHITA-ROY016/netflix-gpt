export const NOW_PLAYING_API_OPTIONS = {
    method: 'GET',
    headers: {
        // 'x-rapidapi-key': '0bd6ee3cbdmsh4bbd37d9e53dd20p1509b9jsn86f3fd4488be',
        'x-rapidapi-key': process.env.REACT_APP_STREAM_AVAILABILITY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
    },
};

export const MOVIES_API_OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_MOVIESVERSE,
        'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
    }
};
export const TRAILER_API_OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_OPENAI_KEY_IMDB146,
        'x-rapidapi-host': 'imdb146.p.rapidapi.com'
    }
};

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;