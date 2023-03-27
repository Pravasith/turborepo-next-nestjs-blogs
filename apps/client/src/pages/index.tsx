import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
import Home from "@components/Pages/Home"
import api from "@services/api"
import { API_URLS } from "@services/routes"

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
    return (
        <main>
            {/* <Meta {...metaData} /> */}
            <Layout>
                <Home />
            </Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // TODO: Add Zod to this

    api.GET("http://localhost:3000/api/").then(res => {
        console.log(res, res)
    })

    return {
        props: {},
    }
}

export default IndexPage
