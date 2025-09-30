import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
export const baseUrl = "http://10.10.13.59:8001"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.10.13.59:8001/",
  // baseUrl: "http://13.233.139.76:8001/",
  credentials: "include",
  prepareHeaders: (headers, { getState, endpoint }) => {

     // Skip token for specific endpoints
      // if (endpoint === "allCategoryList" || endpoint === "allSubCategoryList") {
      //   return headers; // no token added
      // }

    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
     
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(result.error.data.message);
  }
  if (result?.error?.status === 403) {
    toast.error(result.error.data.message);
  }
  if (result?.error?.status === 401) {
    //* Send Refresh
    console.log("Sending refresh token");

    const res = await fetch(
      "http://10.10.13.59:8001/accounts/api/v1/token/refresh",
      // "http://13.233.139.76:8001/accounts/api/v1/token/refresh",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.access) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.access,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["semester", "courses", "offeredCourse"],
  endpoints: () => ({}),
});
