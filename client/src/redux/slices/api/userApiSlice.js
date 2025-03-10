import { apiSlice } from "../apiSlice";

const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,  // Fixed string interpolation
                method: "PUT",
                body: data,
                credentials: "include",
            }),
        }),

        getTeamList: builder.query({
            query: () => ({
                url: `${USER_URL}/get-team`,  // Fixed string interpolation
                method: "GET",
                credentials: "include",
            }),
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,  // Fixed string interpolation
                method: "DELETE",
                credentials: "include",
            }),
        }),
        userAction: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.id}`,  // Fixed string interpolation
                method: "PUT",
                credentials: "include",
            }),
        }),
    }),
});

export const { useUpdateUserMutation, useGetTeamListQuery, useDeleteUserMutation, useUserActionMutation } = userApiSlice; // Fixed export
