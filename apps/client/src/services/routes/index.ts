export const BASE_URL = process.env.NODE_ENV === "production" ? "" : "/"

export const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL + BASE_URL + "api"

export const API_URLS = {
    // HOME: BASE_URL_API + "/blogs",
    HOME: "/api/hello",
    // BLOG: BASE_URL_API + "/blog",
} as const
