import { useCurrentApp } from "@/shared/components/context/app.context"

export const Book =() =>{
    const {user} = useCurrentApp()
    return(
        <>
        {JSON.stringify(user)}

        đây là danh sách bướm
        </>
    )
}