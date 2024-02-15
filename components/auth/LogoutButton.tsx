'use client'

import { logout } from "@/actions/auth/logout"
import { Button } from "../ui/button"

interface LogoutButtonProps {
    children?: React.ReactNode
}

const LogoutButton = ({ children }: LogoutButtonProps) => {

    const onClickHandler = () => {
      logout()
    }

    return (
        <Button onClick={onClickHandler}>
            {children}
        </Button>
    )
}

export default LogoutButton
