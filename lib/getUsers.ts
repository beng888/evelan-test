export default async function getUsers(page: number = 1): Promise<TGetUsersResponse> {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
