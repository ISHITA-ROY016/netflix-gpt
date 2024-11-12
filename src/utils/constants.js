export const NOW_PLAYING_API_OPTIONS = {
    method: 'GET',
    headers: {
        // 'x-rapidapi-key': REACT_APP_STREAM_AVAILABILITY2,
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

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;