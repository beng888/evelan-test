'use client'

import getUsers from "@/lib/getUsers"
import User from "./User"
import { useState } from "react"

export default function UserList(res: TGetUsersResponse) {

    const [users, setusers] = useState(res.data)
    const [page, setPage] = useState(res.page)
    const [total_pages, setTotal_pages] = useState(res.total_pages)

    const loadMore = async () => {

        if (page < total_pages) {
            const newResponse = await getUsers(page + 1)
            console.log("🚀 ~ file: UserList.tsx:10 ~ loadMore ~ newResponse:", newResponse)

            setusers((prev) => [...prev, ...newResponse.data])
            setPage(newResponse.page)
            setTotal_pages(newResponse.total_pages)
        }

    }

    return (
        <div className="max-w-4xl w-full flex-1 m-auto py-20">
            <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
                {users.map((user) => <User key={user.id} {...{ user }} />)}
            </div>
            {page < total_pages &&
                <button className="border-2 rounded-md block m-auto w-fit px-4 py-2 mt-12" onClick={loadMore}>Load more</button>
            }
        </div>
    )
}
