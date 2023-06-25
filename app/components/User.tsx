import Image from "next/image";

export default function User({ user }: { user: TUser }) {

    return (
        <div className="text-center grid gap-2">
            <Image priority src={user.avatar} height={100} width={100} alt={user.first_name}
                className="rounded-full m-auto transition-opacity opacity-0 duration-500"
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.first_name}</p>
        </div>
    )
}

