import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto } from "../models/IPhoto";

export const pexelsAPI = createApi({
  reducerPath: "pexelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pexels.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", process.env.REACT_APP_PEXELS_API_KEY || "");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getPhotos: build.query<
      { photos: IPhoto[] },
      { perPage?: number; page?: number }
    >({
      query: ({ perPage = 15, page = 1 }) => ({
        url: `curated?per_page=${perPage}&page=${page}`,
      }),
    }),

    getRandomPhoto: build.query<{ photos: IPhoto[] }, void>({
      query: () => {
        const randomPage = Math.floor(Math.random() * 1000) + 1;
        return {
          url: `curated?per_page=1&page=${randomPage}`,
        };
      },
    }),

    searchPhotos: build.query<
      { photos: IPhoto[] },
      {
        query: string;
        perPage?: number;
        page?: number;
        orientation?: string;
        size?: string;
      }
    >({
      query: ({ query, perPage = 15, page = 1, orientation, size }) => {
        const params = new URLSearchParams({
          query,
          per_page: perPage.toString(),
          page: page.toString(),
        });
        if (orientation) params.append("orientation", orientation);
        if (size) params.append("size", size);
        return `search?${params.toString()}`;
      },
    }),
  }),
});
