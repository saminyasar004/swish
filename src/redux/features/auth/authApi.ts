import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/accounts/api/v1/token",
        method: "POST",
        body: userInfo,
      }),
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "/accounts/api/v1/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;