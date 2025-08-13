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

    // get single subcategory list by id
    singleSubCategoryListById: builder.query({
      query: (id) => ({
        url: `/service-provider/api/v1/sub-category-list/${id}`,
        providesTags: ["SubCategoryList"],
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

export const {
  useAllCategoryListQuery,
  useAllSubCategoryListQuery,
  useGetUserProfileQuery,
  useSingleSubCategoryListByIdQuery,
} = categoryApi;
