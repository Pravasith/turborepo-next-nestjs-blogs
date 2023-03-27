import { BlogType } from "@lib/api/interface"
import moment from "moment"

export const momentFormat = (time: string) => {
    const momentObj = moment(time)
    const diffInMinutes = moment().diff(momentObj, "minutes")

    let timeAgo
    if (diffInMinutes < 60) {
        timeAgo = momentObj.fromNow()
    } else if (diffInMinutes < 1440) {
        timeAgo = momentObj.calendar().split(" ")[0]
    } else {
        timeAgo = momentObj.format("MMM D, YYYY h:mm A")
    }

    return timeAgo
}

export const orderBlogsForMasonryView = (blogs: BlogType[]) => {
    const result: BlogType[] = []

    for (let i = 0; i < blogs.length; i++) {
        if (i % 2 === 0) result.push(blogs[i])
    }

    for (let i = 0; i < blogs.length; i++) {
        if (i % 2 !== 0) result.push(blogs[i])
    }

    return result
}
