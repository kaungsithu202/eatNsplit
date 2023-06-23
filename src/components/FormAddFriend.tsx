import { useState } from "react"
import Button from "./Button"
import { IFriend } from "../interfaces/types"
interface Props {
    onAddFriend: (friend: IFriend) => void
}
const FormAddFriend = ({ onAddFriend }: Props) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !image) return
        const id = crypto.randomUUID()
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        }
        onAddFriend(newFriend)

    }
    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🎁 Friend Name</label>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label>🟪 Image URL</label>
            <input type="text" value={image}
                onChange={e => setImage(e.target.value)} />
            <Button >Add </Button>
        </form>
    )
}
export default FormAddFriend