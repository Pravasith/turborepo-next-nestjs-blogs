import { useEffect } from "react"
import { HomeProps } from "./interface"

const Home = (props: HomeProps) => {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div
            className={`
                px-1/8
                bg-green-400
            `}
        >
            CARDS HERE
        </div>
    )
}

export default Home
