import { BlogProps } from "./interface"
import styles from "./index.module.scss"
import VTypography from "@components/UI/VTypography"
import VImage from "@components/UI/VImage"
import { momentFormat } from "@utils/index"
import { TypographyVariants } from "@components/UI/VTypography/interface"

const BlogDetails = (props: BlogProps) => {
    return (
        <div
            className={`
                ${styles.blogContainer}
                my-5
                w-full px-6
                tablet:px-1/5
                laptop:px-[25%]
                desktop:px-[30%]
                full-hd:px-[33.33%]
            `}
        >
            <header className="my-10">
                <div className="flex flex-row items-center justify-between">
                    <VTypography className={`my-2`}>
                        {momentFormat(props.blog?.published_at || "")}
                    </VTypography>
                </div>

                <VTypography type={TypographyVariants.H1}>
                    {props.blog?.title}
                </VTypography>

                <div className="flex-row-west">
                    <VImage
                        imageBlock={{
                            src: props.blog?.image || "",
                            alt: `${props.blog?.title} image`,
                        }}
                    />
                </div>
            </header>

            <div
                dangerouslySetInnerHTML={{
                    __html: props.blog?.content || "Blog Not found",
                }}
            ></div>
        </div>
    )
}

export default BlogDetails
