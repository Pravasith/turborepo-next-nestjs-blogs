import { EColorClassNames } from "@lib/themes/interface"
import { Pagination } from "@mui/material"
import { VPaginationProps } from "./interface"

const VPagination = ({
    pagesCount,
    onPageChange,
    numberOfItemsToShow = 6,
    className,
}: VPaginationProps) => {
    return (
        <Pagination
            count={Math.ceil(pagesCount / numberOfItemsToShow)}
            onChange={onPageChange}
            className={`
                    flex-row-center
                    z-10
                    ${EColorClassNames.LIGHT_THEME_BACKGROUND_100}
                    ${className}
                `}
        />
    )
}

export default VPagination
