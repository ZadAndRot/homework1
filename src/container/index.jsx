
import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendList from "components/FriendsList";
import TransactionHistory from "components/TransactionHistory";
import user from "../../src/user.json"
import data from "../../src/data.json"
import friends from "../../src/friends.json"
import transactions from "../../src/transactions.json"
import styles from "../container/index.module.css"



const Container=()=>{
    return(
    <div className={styles.container}>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics 
            title="Upload stats" 
            stats={data} 
        />
        <FriendList
            friends={friends}
        />
        <TransactionHistory 
            items={transactions}
        />
        

        
        
    </div>
    )
};



export default Container;