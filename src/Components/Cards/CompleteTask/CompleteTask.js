import styles from "./CompleteTask.module.css";
import awardJpg from "../../../images/completeTask/award.jpg";
import awardJpg2x from "../../../images/completeTask/award@2x.jpg";
import awardWebp from "../../../images/completeTask/award.webp";
import awardWebp2x from "../../../images/completeTask/award@2x.webp";
import { ReactComponent as Arrow } from "../../../images/completeTask/arrow.svg";

function CompleteTask(props) {
  return (
    <div className={styles.completeWrap}>
      <p className={styles.completeInfo}>COMPLETED: ... </p>
      <picture>
        <source
          srcSet={`${awardWebp} 1x, ${awardWebp2x} 2x`}
          type="image/webp"
        ></source>
        <source srcSet={`${awardJpg} 1x, ${awardJpg2x} 2x`}></source>
        <img src={awardJpg} className={styles.image}></img>
      </picture>
      <div className={styles.continueWrap}>
        <p className={styles.next}>
          Continue<Arrow className={styles.xd}></Arrow>
        </p>
      </div>
    </div>
  );
}

export default CompleteTask;
