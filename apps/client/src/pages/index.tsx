import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { API_URLS } from "@services/routes"
import { z } from "zod"
import { BlogPattern, BlogType } from "@lib/api/interface"
import { orderBlogsForMasonryView } from "@utils/index"

interface IndexPageProps {
    blogs: BlogType[]
    count: number
}

const IndexPage: NextPage<IndexPageProps> = ({ blogs, count }) => {
    // Hardcoded, but it can come through a DB
    const metaData = {
        pageTitle: "Vivid Theory Blogs",
        ogSiteName: "vividtheory.com",
        ogTitle: "Vivid Theory Blogs",
        ogType: "website",
        ogUrl: "https://vividtheory.com/",
        twitterCreator: "@vividtheory",
        description: "Vivid Theory Blogs",
        twitterDescription: "Vivid Theory Blogs",
        ogDescription: "Vivid Theory Blogs",
        ogImageAlt: "Vivid Theory Blogs",
        twitterImageAlt: "Vivid Theory Blogs",
        ogImage: "",
        twitterImage: "",
    }

    return (
        <main>
            <Meta {...metaData} />
            <Layout>
                <Home blogs={blogs} count={count} />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // TODO: Add Zod to this
    let blogs: BlogType[] = [],
        count = 0

    await Promise.all([
        api.GET<number>(API_URLS.GET_BLOGS_COUNT),
        api.GET<BlogType[]>(API_URLS.GET_BLOGS_BY_PAGE + 1),
    ])
        .then(([blogCount, blogsData]) => {
            blogs = z.array(BlogPattern).parse(blogsData)
            count = blogCount
        })
        .catch(err => {
            // TODO: Add toast messages
            console.log(err)
        })

    return {
        props: {
            blogs,
            count,
        },
    }
}

export default IndexPage
