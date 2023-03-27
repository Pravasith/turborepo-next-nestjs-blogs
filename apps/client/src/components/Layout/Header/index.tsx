import { Logo } from "@assets/svgs/Layout"
import Link from "next/link"

const Header = () => {
    return (
        <header
            className={`
                w-full flex-row-center
            `}
        >
            <div
                className={`
                    w-32 mx-10 my-5
                `}
            >
                <Link href={"/"}>
                    <Logo />
                </Link>
            </div>
        </header>
    )
}

export default Header
