import { NOW_PLAYING_API_OPTIONS } from "../../utils/constants";

const getMovieByTitle = async (title) => {
  const url = 'https://streaming-availability.p.rapidapi.com/shows/search/title?country=in&title='+title+'&series_granularity=show&show_type=movie&output_language=en';

  try {
    const data = await fetch(url, NOW_PLAYING_API_OPTIONS);
    const json = await data.json();
   // console.log(json[0]);
    return json[0]; // Return the first match if available
  } catch (error) {
    console.error(`Failed to fetch movie by title "${title}":`, error);
    return null;
  }
};

export default getMovieByTitle;
