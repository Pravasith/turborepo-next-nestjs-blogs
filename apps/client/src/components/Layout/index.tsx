import React, { useEffect, useReducer, useRef } from "react"

import gsap from "gsap"

import MenuBar from "@components/Layout/MenuBar"

import { EColorClassNames, EColors } from "@lib/themes/interface"

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
            {props.children}
        </div>
    )
}

export default Layout
