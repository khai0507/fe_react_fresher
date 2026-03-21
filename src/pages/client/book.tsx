import { useCurrentApp } from "@/shared/context/app.context"

export const Book =() =>{
    const {user} = useCurrentApp()
    return(
        <>
        {JSON.stringify(user)}

        đây là danh sách bướm
        </>
    )
}