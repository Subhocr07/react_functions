import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/AuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
  Credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authh.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("refresh token sending again");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      //store the new token
      const user = api.getState().auth.user;
      //retry the original array
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
