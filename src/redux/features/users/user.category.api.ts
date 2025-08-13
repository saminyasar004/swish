import { baseApi } from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allCategoryList: builder.query({
      query: () => ({
        url: "/jobs/api/v1/category",
        providesTags: ["category"],
      }),
    }),

    allSubCategoryList: builder.query({
      query: () => ({
        url: "/jobs/api/v1/category-list",
        providesTags: ["category"],
      }),
    }),
    
    // GET PROFILE
    getUserProfile: builder.query({
      query: () => ({
        url: "/accounts/api/v1/profile",
        providesTags: ["Profile"],
      }),
    }),

    // END
  }),
});

export const { useAllCategoryListQuery, useAllSubCategoryListQuery , useGetUserProfileQuery} =
  categoryApi;
