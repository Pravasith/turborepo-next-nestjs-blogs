import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
    return (
        <main>
            {/* <Meta {...metaData} /> */}
            <Layout>{"HELLO World"}</Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    // TODO: Add Zod to this
    return {
        props: {},
    }
}

export default IndexPage
