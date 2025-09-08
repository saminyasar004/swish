import { baseApi } from "@/redux/api/baseApi";

const postJobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postJobUsingFormData: builder.mutation({
      query: (data) => ({
        url: "/jobs/api/v1/job",
        method: "POST",
        body: data,
      }),
    }),

    // GET PROFILE
    // getUserProfile: builder.query({
    //   query: () => ({
    //     url: "/accounts/api/v1/profile",
    //     providesTags: ["Profile"],
    //   }),
    // }),

    // END
  }),
});

export const { usePostJobUsingFormDataMutation} = postJobApi;
