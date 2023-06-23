import Friend from "./Friend";
import { IFriend, IFriendList } from "../interfaces/types";
interface Props {
    friends: IFriend[],
    onSelection: (friend: IFriend) => void,
    selectedFriend: IFriend

}
const FriendList = ({ friends, onSelection, selectedFriend }: Props) => {
    return (
        <ul>
            {friends.map((friend: IFriend) => (
                <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />
            ))}
        </ul>
    );
}

export default FriendList;