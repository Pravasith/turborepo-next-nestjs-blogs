import Layout from "@components/Layout"
import VTypography from "@components/UI/VTypography"
import { TypographyVariants } from "@components/UI/VTypography/interface"
import VImage from "@ui/VImage"

const NotFound = () => {
    return (
        <Layout>
            <div className="flex-col-center w-full h-full my-20">
                <VImage
                    className="mb-2 rounded-3xl overflow-clip max-w-[30rem]"
                    imageBlock={{
                        className: `rounded-lg`,
                        src: "/not-found.jpg",
                        alt: "Page not found graphic (A magnifying glass with a sad face) ",
                    }}
                />
                <div className="m-5">
                    <VTypography type={TypographyVariants.H2}>
                        Oops, the page you are looking for is not available!
                    </VTypography>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound
