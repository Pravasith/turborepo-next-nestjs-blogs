import React from "react"

import { EColorClassNames, EColors } from "@lib/themes/interface"
import Header from "./Header"

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div
            className={`
                absolute z-10 w-full
                ${EColorClassNames.LIGHT_THEME_BACKGROUND_100}
            `}
        >
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
