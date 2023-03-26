import { Logo } from "@assets/svgs/Layout"
import Link from "next/link"

interface HeaderProps {}

const Header = (props: HeaderProps) => {
    return (
        <header>
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
