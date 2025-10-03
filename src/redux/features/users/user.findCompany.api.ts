import { baseApi } from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: ({ search, area_name }) => ({
        url: `/service-provider/api/v1/searched-company`,
        params: { search, area_name },
      }),
    }),

    // END
  }),
});

export const {
  useGetCompaniesQuery, useLazyGetCompaniesQuery
} = categoryApi;
