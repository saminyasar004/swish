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

    forgetPassword: builder.mutation({
      query: (userInfo) => ({
        url: "accounts/api/v1/otp",
        method: "POST",
        body: userInfo,
      }),
    }),

   
    verifyOtp: builder.mutation({
      query: (userInfo) => ({
        url: "/accounts/api/v1/otp-verificaiton",
        method: "PATCH",
        body: userInfo,
      }),
    }),
   
        changePassword: builder.mutation({
      query: (userInfo) => ({
        url: '/accounts/api/v1/change-password',
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`, // Include token in Authorization header
        },
        body: {
          new_password: userInfo.new_password,
        },
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

export const { useLoginMutation, useRegisterMutation, useForgetPasswordMutation, useVerifyOtpMutation, useChangePasswordMutation } = authApi;