import { useMutation } from "react-query";
import { getSong, searchSong } from "../service/songService";

export function useGetSongList() {
  const {
    mutateAsync: getSongs,
    isLoading,
    isSuccess,
  } = useMutation((params: any) => getSong(), {
    onError: async (e: any) => {
      console.log(e);
    },
    onSuccess: async () => {},
  });

  async function submitGetSongList(params: any) {
    return getSongs(params);
  }

  return {
    submitGetSongList,
    isLoading,
    isSuccess,
  };
}
export function useSearchSong() {
  const {
    mutateAsync: search,
    isLoading,
    isSuccess,
  } = useMutation((params: any) => searchSong(), {
    onError: async (e: any) => {
      console.log(e);
    },
    onSuccess: async () => {},
  });

  async function submitSearchSong(params: any) {
    return search(params);
  }

  return {
    submitSearchSong,
    isLoading,
    isSuccess,
  };
}
