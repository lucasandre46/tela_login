import styles from'./miniBtn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function MiniBtn({type}){

   return<>
   
   <button id="minibtn" 
   className={styles.MiniBtn}
   type={type}>
   {type === "google" && <FontAwesomeIcon icon={faGoogle} />}
   {type === "instagram" && <FontAwesomeIcon icon={faInstagram} />}
      {type === "github" && <FontAwesomeIcon icon={faGithub} />}
   </button>

   </>

}
export default MiniBtn