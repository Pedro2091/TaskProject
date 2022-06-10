import TaksCard from "../components/task-card";
import UtilStyles from "../styles/utils.module.css"

export default function Home(){
    return(
      <main className={`main-background ${UtilStyles.center}`}>
        <TaksCard/>
      </main>
    );
}