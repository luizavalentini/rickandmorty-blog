import styles from './PostCard.module.css';

export default function PostCard({ post }) {
    return(
        <> 
  <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/img.webp`}
                    alt="Imagem do Post"
                    />
            </div>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button  className="{styles.botaoLer} bg-dark rounded border border-1">Ler</button>
        </>
    )
}