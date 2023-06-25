type TGetUsersResponse = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: TUser[]
}

type TUser = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
