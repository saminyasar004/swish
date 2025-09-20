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

    // MY JOBS
    getMyJobs: builder.query({
      query: () => ({
        url: "/jobs/api/v1/my-jobs",
        providesTags: ["myJobs"],
      }),
    }),

    // PREVIOUS USED COMPANIES AND STARTED JOBS
      getPreviousCompanyAndStartedJobs: builder.query({
      query: () => ({
        url: "jobs/api/v1/previously-used-companies",
        providesTags: ["previousCompanyAndStartedJobs"],
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

export const { usePostJobUsingFormDataMutation, useGetMyJobsQuery, useGetPreviousCompanyAndStartedJobsQuery} = postJobApi;
