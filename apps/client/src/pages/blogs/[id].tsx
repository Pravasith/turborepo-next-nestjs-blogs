import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import BlogDetails from "@components/Pages/BlogDetails"
import api from "@services/api"
import { API_URLS } from "@services/routes"
import { BlogType } from "@lib/api/interface"

// import { metaData } from "@utils/constants"
// import BlogDetails from "@components/Pages/BlogDetails"
// import { BlogsType } from "@lib/api/blogs/interface"

// import api from "@services/api"
// import { TextGroupType } from "@lib/api/textGroups/interface"
// import { MediaGroupType } from "@lib/api/mediaGroups/interface"
// import { BASE_URLS } from "@services/routes"

interface BlogProps {
    blog?: BlogType
}

const Blog: NextPage<BlogProps> = ({ blog }) => {
    return (
        <main>
            {/* <Meta {...blogMetaData} /> */}
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
            // blogData: blogData[0],
            // textGroup: textGroup[0],
            // mediaGroup: mediaGroup[0],

            blog,
        },
    }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    const paths: any = []

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export default Blog
