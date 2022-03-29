import axios from "axios";
import { SONG_SERVICE_URL } from "../constantlist";

export const getSong = async (): Promise<any> => {
  const { data } = await axios.get(`${SONG_SERVICE_URL}/song`);
  return data;
};
export const searchSong = async (): Promise<any> => {
  const { data } = await axios.get(`${SONG_SERVICE_URL}/song/search`);
  return data.data;
};
