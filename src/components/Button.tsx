import { ReactNode } from "react"
interface Props {
    children: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: Props) => {
    return (
        <button onClick={onClick} className="button">{children}</button>
    )
}

export default Button