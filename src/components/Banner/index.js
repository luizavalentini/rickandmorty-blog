import styles from './Banner.module.css';
import minhaFoto from '../../assets/minha-foto.webp';

export default function Banner() {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Rick and Morty
                </h1>

                <p className={styles.paragrafo}>
                Rick and Morty é uma série animada que acompanha as aventuras e os descobrimentos de um super cientista e seu neto não muito brilhante. Completamente irresponsável, Rick não é um avô amoroso e gentil. Muito pelo contrário, ele usa o neto, Morty, como cobaia em seus experimentos e não leva em consideração a segurança do jovem em suas aventuras intergaláticas.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Rhaenyra Targaryen"
                    />
            </div>

        </div>
        </>
    );
}