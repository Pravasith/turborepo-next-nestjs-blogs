import type { GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"
// import { metaData } from "@utils/constants"

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
    return (
        <main>
            {/* <Meta {...metaData} /> */}
            <Layout>
                <h1>HELLO</h1>
            </Layout>
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
