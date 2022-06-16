import styles from "./CompleteTask.module.css";
import { ReactComponent as Arrow } from "../../../images/completeTask/arrow.svg";
import { ReactComponent as Platform } from "../../../images/completeTask/platform.svg";
import { ReactComponent as Shield } from "../../../images/completeTask/shield.svg";
import { Animated } from "react-animated-css";

function CompleteTask(props) {
  return (
    <div className={styles.completeWrap}>
      <div className={styles.complete}>
        <Animated animationIn="fadeInLeft">
          <p className={styles.completeInfo}>COMPLETED:</p>
        </Animated>
        <Animated animationInDelay={1500} animationIn={"lightSpeedIn"}>
          <Animated animationInDelay={2500} animationIn={"rubberBand"}>
            <span className={styles.questName}>Visit the dentist</span>
          </Animated>
        </Animated>
      </div>
      <div className={styles.award}>
        <Animated animationInDelay={1000} animationIn="fadeInDown">
          <Shield className={styles.shield}></Shield>
        </Animated>
        <Animated animationInDelay={1000} animationIn="fadeInUp">
          <Platform className={styles.platform}></Platform>
        </Animated>
      </div>
      <div className={styles.continueWrap}>
        <button className={styles.button}>
          Continue <Arrow className={styles.arrow}></Arrow>
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
