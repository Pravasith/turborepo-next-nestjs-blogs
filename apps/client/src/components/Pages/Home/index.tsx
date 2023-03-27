import VCard from "@components/UI/VCard"
import VPagination from "@components/UI/VPagination"
import { BlogType } from "@lib/api/interface"

import api from "@services/api"
import { API_URLS } from "@services/routes"
import { ChangeEvent, useState } from "react"
import { HomeProps } from "./interface"

const Home = ({ blogs, count }: HomeProps) => {
    const [currentBlogs, setCurrentBlogs] = useState<BlogType[]>(blogs)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChange = (_event: ChangeEvent<unknown>, page: number) => {
        if (page === currentPage) return

        api.GET<BlogType[]>(API_URLS.GET_BLOGS_BY_PAGE + page)
            .then(blogs => {
                setCurrentBlogs(blogs)
                setCurrentPage(page)

                console.log(blogs)
            })
            .catch(err => {
                // TODO: Add toast message
                console.error(err)
            })
    }

    return (
        <div
            className={`
                flex-col-center
                my-10
                
            `}
        >
            <VPagination
                pagesCount={count}
                numberOfItemsToShow={6}
                onPageChange={onPageChange}
                className={`
                    sticky top-0 p-5 w-full 
                `}
            />

            <div
                className={`
                    grid grid-cols-3
                    gap-4
                    my-10
                    max-w-[1280px]
                    px-5
                `}
            >
                {currentBlogs.map((blog, i) => {
                    return (
                        <VCard
                            key={"blog-card-" + i}
                            title={blog.title}
                            description={""}
                            publishedDate={blog.published_at}
                            image={blog.image}
                            link={"/blogs/" + blog.slug}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
