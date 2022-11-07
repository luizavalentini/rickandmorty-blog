
import MenuLink from 'components/MenuLink';
import styles from './Menu.module.css';
import icon from '../../assets/icon.jpeg';

export default function Menu() {
    return(
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to="/">
                    Início
               </MenuLink>
               <MenuLink to="/SobreMim">
                    Sobre Mim
               </MenuLink>
               <MenuLink to="/Opiniao">
                    Opiniao
               </MenuLink>
            <div className={styles.imagens}>
                <img
                    className={styles.icon}
                    src={icon}
                    alt="icone"
                    />
            </div>

            </nav>
        </header>
    )
}

