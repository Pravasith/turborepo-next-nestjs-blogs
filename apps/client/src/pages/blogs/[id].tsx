import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import BlogDetails from "@components/Pages/BlogDetails"
import api from "@services/api"
import { API_URLS } from "@services/routes"
import { BlogType } from "@lib/api/interface"

interface BlogProps {
    blog?: BlogType
}

const Blog: NextPage<BlogProps> = ({ blog }) => {
    const metaData = {
        pageTitle: blog?.title || "",
        ogSiteName: "vividtheory.com",
        ogTitle: "Vivid Theory Blogs",
        ogType: "website",
        ogUrl: "https://vividtheory.com/",
        twitterCreator: "@vividtheory",
        description: blog?.title || "",
        twitterDescription: blog?.title || "",
        ogDescription: blog?.title || "",
        ogImageAlt: blog?.title || "",
        twitterImageAlt: blog?.title || "",
        ogImage: "",
        twitterImage: "",
    }
    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <BlogDetails blog={blog} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let blog: BlogType | null = null

    await api
        .GET<BlogType>(API_URLS.GET_BLOG_BY_SLUG + params?.id)
        .then(blogData => {
            blog = blogData
        })
        .catch(err => {
            // TODO: Add toast messages
            console.log(err)
        })

    return {
        props: {
            blog,
        },
    }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = []

    await api
        .GET<BlogType[]>(API_URLS.GET_ALL_BLOGS)
        .then(blogs => {
            const blogSlugs = blogs?.map(blog => blog.slug)
            paths = blogSlugs
        })
        .catch(err => {
            // TODO: Add toast messages //
            console.log(err)
        })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export default Blog
