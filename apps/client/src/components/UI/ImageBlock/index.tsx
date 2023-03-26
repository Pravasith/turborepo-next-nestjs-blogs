import Image from "next/image"
import { ImageBlockProps } from "./interface"

const ImageBlock = (props: ImageBlockProps) => {
    return (
        <div className={`flex-col-center ${props.className}`}>
            <div className="relative text-[0]">
                <div className="z-10 absolute w-full h-full"></div>
                <Image
                    src={props.imageBlock.src}
                    alt={props.imageBlock.alt || ""}
                    width={props.imageBlock.width ?? 1024}
                    height={props.imageBlock.height ?? 640}
                    // objectFit="contain"
                />
            </div>

            {props.imageBlock.showCaption && props.imageBlock.caption && (
                <p>{props.imageBlock.caption}</p>
            )}
        </div>
    )
}

export default ImageBlock
