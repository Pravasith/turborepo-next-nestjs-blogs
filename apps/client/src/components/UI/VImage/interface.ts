import { ETextAlign } from "@lib/themes/interface"

export interface ImageBlockType {
    src: string
    width?: number
    height?: number
    alt?: string
    id?: string
    caption?: string
    showCaption?: boolean
    hyperlink?: string
    className?: string
}

export interface ImageBlockProps {
    imageBlock: ImageBlockType
    className?: string
    link?: string
    alignCaptionText?: ETextAlign
    textClassName?: string
    fitToContainer?: boolean
}
