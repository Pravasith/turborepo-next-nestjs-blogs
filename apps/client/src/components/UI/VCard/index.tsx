import { Card, Divider } from "@mui/material"
import VTypography from "@ui/VTypography"
import VImage from "@ui/VImage"
import { TypographyVariants } from "@ui/VTypography/interface"
import { momentFormat } from "@utils/index"
import Link from "next/link"

interface VCardProps {
    title: string
    description: string
    publishedDate: string
    image: string
    link: string
    className?: string
}

const VCard = ({
    title,
    description,
    publishedDate,
    image,
    link,
    className,
}: VCardProps) => {
    return (
        <div
            className={`
                ${className}
            `}
        >
            <Link href={link}>
                <Card
                    className={`
                        shadow-xl rounded-2xl
                        p-5
                        border-4 border-white
                        hover:border-black
                        transition
                    `}
                >
                    <VImage
                        className="mb-2  rounded-lg overflow-clip"
                        imageBlock={{
                            className: `rounded-lg`,
                            src: image,
                            alt: "Image thumbnail for " + title,
                        }}
                    />
                    <VTypography type={TypographyVariants.H2}>
                        {title}
                    </VTypography>

                    <Divider className="m-2" />

                    <VTypography className={`my-2`}>
                        {momentFormat(publishedDate)}
                    </VTypography>
                </Card>
            </Link>
        </div>
    )
}

export default VCard
