import { createApi, fetchbaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/AuthSlice";

const baseQuery = fetchbaseQuery({
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
};
