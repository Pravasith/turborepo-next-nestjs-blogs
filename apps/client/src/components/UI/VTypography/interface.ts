export interface VTypographyProps {
    children: React.ReactNode
    type?: TypographyVariants
    className?: string
}

export enum TypographyVariants {
    H1 = "h1",
    H2 = "h2",
    P = "body1",
}
