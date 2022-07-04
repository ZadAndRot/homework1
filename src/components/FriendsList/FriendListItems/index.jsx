import PropTypes from "prop-types"
import styles from "../FriendListItems/index.module.css"

const FriendListItems=({friend})=>{
    return(
        <li className={styles.item}>
        <span className={styles.status}>{friend.isOnline?<div className={styles.red}> kk</div>:<div className={styles.green}> mm</div>}</span>
        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{friend.name}</p>
        </li>
    );
}

FriendListItems.propTypes={
    friend:PropTypes.shape({
        isOnline:PropTypes.bool,
        avatar:PropTypes.string,
        name:PropTypes.string
    })
}

export default FriendListItems;