export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "TODO: Add prod URL after deploy"
        : "http://localhost:3000/"

export const BASE_URL_API = BASE_URL + "api"

export const API_URLS = {
    GET_BLOGS_COUNT: BASE_URL_API + "/blogs/count",
    GET_BLOGS_BY_PAGE: BASE_URL_API + "/blogs/?page=",
    GET_BLOGS_BY_ID: BASE_URL_API + "/blogs/",
} as const
