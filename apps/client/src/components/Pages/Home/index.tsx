import VCard from "@components/UI/VCard"
import { BlogType } from "@lib/api/interface"
import { EColorClassNames } from "@lib/themes/interface"
import { Pagination, PaginationProps } from "@mui/material"
import api from "@services/api"
import { API_URLS } from "@services/routes"
import { ChangeEvent, useEffect, useState } from "react"
import { HomeProps } from "./interface"

const Home = ({ blogs, count }: HomeProps) => {
    useEffect(() => {
        console.log(blogs)
    }, [])

    const [currentBlogs, setCurrentBlogs] = useState<BlogType[]>(blogs)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChange = (_event: ChangeEvent<unknown>, page: number) => {
        if (page === currentPage) return

        api.GET<BlogType[]>(API_URLS.GET_BLOGS_BY_PAGE + page).then(blogs => {
            setCurrentBlogs(blogs)
            setCurrentPage(page)
        })
    }

    return (
        <div
            className={`
                px-1/8
                flex-col-center
                my-10
            `}
        >
            <Pagination
                count={Math.ceil(count / 6)}
                onChange={onPageChange}
                className={`
                    sticky top-0 p-5 w-full 
                    flex-row-center
                    z-10
                    ${EColorClassNames.LIGHT_THEME_BACKGROUND_100}
                `}
            />

            <div
                className={`
                    grid0grid-cols-3
                    masonry-container
                    my-10
                `}
            >
                {currentBlogs.map((blog, i) => {
                    return (
                        <VCard
                            className={`masonry-item`}
                            key={"blog-card-" + i}
                            title={blog.title}
                            description={""}
                            publishedDate={blog.published_at}
                            image={blog.image}
                            link={blog.slug}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
