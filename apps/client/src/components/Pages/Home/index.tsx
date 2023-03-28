import VCard from "@components/UI/VCard"
import VPagination from "@components/UI/VPagination"
import { BlogType } from "@lib/api/interface"
import { Skeleton } from "@mui/material"

import api from "@services/api"
import { API_URLS } from "@services/routes"
import { ChangeEvent, useState } from "react"
import { HomeProps } from "./interface"

const Home = ({ blogs, count }: HomeProps) => {
    const [currentBlogs, setCurrentBlogs] = useState<BlogType[]>(blogs)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    const onPageChange = (_event: ChangeEvent<unknown>, page: number) => {
        if (page === currentPage) return

        setLoading(true)
        api.GET<BlogType[]>(API_URLS.GET_BLOGS_BY_PAGE + page)
            .then(blogs => {
                setCurrentBlogs(blogs)
                setCurrentPage(page)
            })
            .catch(err => {
                // TODO: Add toast message
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getCards = () => {
        if (loading)
            return new Array(6).map((_, i) => (
                <div key={"loading-card-" + i} className="w-[20rem]">
                    <Skeleton width={"100%"} height={"2.5rem"} />
                    <Skeleton width={"100%"} height={"2.5rem"} />
                    <Skeleton width={"100%"} height={"10rem"} />
                </div>
            ))
        else
            return currentBlogs.map((blog, i) => {
                return (
                    <VCard
                        key={"blog-card-" + i}
                        title={blog.title}
                        description={""}
                        publishedDate={blog.published_at}
                        image={blog.image}
                        link={"/blogs/" + blog.slug}
                        isLoading={loading}
                    />
                )
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
                    grid grid-cols-1
                    gap-3
                    
                    my-10
                    max-w-[1280px]
                    px-5

                    tablet:grid-cols-2

                    laptop:grid-cols-3
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
                            isLoading={loading}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
