import { ChangeEvent } from "react"

export interface VPaginationProps {
    pagesCount: number
    onPageChange: (_event: ChangeEvent<unknown>, page: number) => void
    numberOfItemsToShow?: number
    className?: string
}
