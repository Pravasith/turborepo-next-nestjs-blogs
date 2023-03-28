import { Card, Divider, Skeleton } from "@mui/material"
import VTypography from "@ui/VTypography"
import VImage from "@ui/VImage"
import { TypographyVariants } from "@ui/VTypography/interface"
import { momentFormat } from "@utils/index"
import Link from "next/link"
import styles from "./index.module.scss"

interface VCardProps {
    title: string
    description: string
    publishedDate: string
    image: string
    link: string
    className?: string
    isLoading: boolean
}

const VCard = ({
    title,
    description,
    publishedDate,
    image,
    link,
    className,
    isLoading,
}: VCardProps) => {
    return (
        <div
            className={`
                ${styles.vCardContainer}
                ${className}
            `}
        >
            <Link href={link}>
                <Card className={styles.card}>
                    {isLoading ? (
                        <div className="w-[20rem]">
                            <Skeleton width={"100%"} height={"2.5rem"} />
                            <Skeleton width={"100%"} height={"2.5rem"} />
                            <Skeleton width={"100%"} height={"10rem"} />
                        </div>
                    ) : (
                        <>
                            <VImage
                                className="mb-2 rounded-lg overflow-clip"
                                fitToContainer
                                imageBlock={{
                                    className: `rounded-lg`,
                                    src: image,
                                    alt: "Image thumbnail for " + title,
                                }}
                            />
                            <VTypography type={TypographyVariants.H2}>
                                {title}
                            </VTypography>

                            <Divider className={styles.divider} />

                            <VTypography className={`my-2`}>
                                {momentFormat(publishedDate)}
                            </VTypography>
                        </>
                    )}
                </Card>
            </Link>
        </div>
    )
}

export default VCard
