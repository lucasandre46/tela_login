import styles from './Main.module.scss';
import JimmyImage from './jimmy.png';

function Main() {
  return (
    <main className={styles.main}>
      <img src={JimmyImage} alt="img_jimmy" className={styles.img_mega} />

      <div className={styles.txt}>
        <h1 className={styles.name}>Lucas A. Miguel</h1>
        <p className={styles.description}>
          Sou programador junior em HTML, CSS, JavaScript, C. Além de programador sou músico, fã de
          Megadeth, Iron Maiden, Black Sabbath.
        </p>
      </div>

      <iframe
        className={styles.mega_vd}
        src="https://www.youtube.com/embed/L4EjOPYOrNs?si=j8WYo47zjGq7eyIo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </main>
  );
}

export default Main;