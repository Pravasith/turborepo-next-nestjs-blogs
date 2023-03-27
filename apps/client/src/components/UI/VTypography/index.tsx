import { Typography } from "@mui/material"
import { TypographyVariants, VTypographyProps } from "./interface"

const VTypography: React.FC<VTypographyProps> = ({
    type = TypographyVariants.P,
    children,
    className,
}: VTypographyProps) => {
    const getClassName = () => {
        switch (type) {
            case TypographyVariants.H2:
                return `font-h2`
            case TypographyVariants.H1:
                return `font-h1`
            case TypographyVariants.P:
                return `font-p`

            default:
                return ""
        }
    }

    return (
        // Passing children instead of a string because
        // devs might wanna pass other UI components
        <Typography variant={type} className={getClassName() + " " + className}>
            {children}
        </Typography>
    )
}

export default VTypography
