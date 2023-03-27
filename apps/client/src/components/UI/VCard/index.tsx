import { Card, Divider } from "@mui/material"
import VTypography from "@ui/VTypography"
import VImage from "@ui/VImage"
import { TypographyVariants } from "@ui/VTypography/interface"
import { momentFormat } from "@utils/index"

interface VCardProps {
    title: string
    description: string
    publishedDate: string
    image: string
    link?: string
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
            <Card
                className={`
                    shadow-xl rounded-2xl
                    p-5
                `}
            >
                <VTypography type={TypographyVariants.H2}>{title}</VTypography>

                <VImage
                    className="my-2 rounded-md overflow-clip"
                    imageBlock={{
                        className: `rounded-lg`,
                        src: image,
                        alt: "Image thumbnail for " + title,
                    }}
                />

                <Divider className="m-2" />

                <VTypography className={`my-2`}>
                    {momentFormat(publishedDate)}
                </VTypography>
            </Card>
        </div>
    )
}

export default VCard
