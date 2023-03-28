import { Typography } from "@mui/material"
import { TypographyVariants, VTypographyProps } from "./interface"
import styles from "./index.module.scss"

const VTypography: React.FC<VTypographyProps> = ({
    type = TypographyVariants.P,
    children,
    className,
}: VTypographyProps) => {
    return (
        // Passing children instead of a string because
        // devs might wanna pass other UI components
        <div className={styles.typographyClasses}>
            <Typography variant={type} className={className}>
                {children}
            </Typography>
        </div>
    )
}

export default VTypography
