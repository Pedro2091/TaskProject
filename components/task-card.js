import styles from "./task-card.module.css";
import utilStyles from "../styles/utils.module.css";
import PlayButton from '../public/images/button-play.svg';
import PauseButton from '../public/images/button-pause.svg';
import ConfirmButton from '../public/images/button-confirm.svg';
import DownIcon from '../public/images/drop-icon.svg';

export default function TaksCard(){
    return(
        <div className={`${styles.border} ${utilStyles.center}`}>
            <div className={styles.taskCard}>
                <div>
                    <span className={styles.timer}>114:00:00</span>
                </div>
                <div className={styles.timer}>
                    {/* <PlayButton width="40px" height="48 px"/> */}
                    <PauseButton width="40px" height="48px"/>
                    <ConfirmButton width="40px" height="38px"/>
                </div>

                <div className={`${styles.timeStartEnd}`}>
                    <span>09:00:00</span>
                    <span>00:13:00</span>
                </div>

                <div className={styles.categories}>
                    <div>
                        <span>Estudo</span>
                        <DownIcon width="24px" height="8px"/>
                    </div>
                    
                    <div>
                        <span>Take Blip</span>
                        <DownIcon width="24px" height="8px"/>
                    </div>
                    
                </div>
                <div className={styles.textDropDown}>
                    <span>Começando um contato...</span>
                </div>
                
                <div className={styles.showMore}>
                    <DownIcon width="44px" height="28px"/>
                </div>
            </div>
        </div>
    );
}