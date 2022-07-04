import FriendListItems from "./FriendListItems";
import PropTypes from "prop-types"

const FriendList=({friends})=>{
    return(
        <ul className="friend-list">
            {friends.map((friend=>(<FriendListItems key={friend.id} friend={friend}/>)))}
            
        
        </ul>
    );
}

FriendList.propTypes={
    friends:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number
        })
    )
}

export default FriendList;