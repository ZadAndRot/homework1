import { arrayOf } from "prop-types";
import PropTypes from "prop-types";
import styles from "../Statistics/index.module.css"

const Statistics=({title="",stats})=>{
    var style=()=>{
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        var style="rgb("+r+","+g+","+b+")";
        return(style);
    }
    
    return(

        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.stat_list}>

                {stats.map((stat)=>(
                <li key={stat.id} style={{backgroundColor:style()}} className={styles.item}>
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}</span>
                </li>))}
                
            </ul>
        </section>

    );
}

Statistics.propTypes={
    title:PropTypes.string,
    stats:arrayOf(
        PropTypes.shape({
            id:PropTypes.string,
            label:PropTypes.string,
            percentage:PropTypes.number
        })
    )
}
export default Statistics;