import { IFriend } from "../interfaces/types";
interface Props {
    friend: IFriend,
    onSelection: (friend: IFriend) => void
    selectedFriend: IFriend
}
const Friend = ({ friend, onSelection, selectedFriend }: Props) => {
    // selectedFriend.id === friend.id
    // console.log(selectedFriend, friend)

    const isSelected = selectedFriend?.id === friend.id
    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€

                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you {Math.abs(friend.balance)}€
                </p>
            )}
            {friend.balance === 0 && (
                <p>
                    You and {friend.name} are even
                </p>
            )}
            <button onClick={() => onSelection(friend)} className="button">{isSelected ? "Close" : "Select"}</button>
        </li>);
}

export default Friend;