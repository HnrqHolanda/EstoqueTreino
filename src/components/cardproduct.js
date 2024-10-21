import styles from "../styles/components/cardproduct.module.css"

function Card_product({produto}){
    return(
        <div className={styles.BigContainer}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.id}</h1>
                    <div className={styles.invline}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.nome}</h1>
                    <div className={styles.invline}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.categoria}</h1>
                    <div className={styles.invline}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.quantidade} {produto.tipo}</h1>
                    <div className={styles.verticalline}></div>
                </div>
                <div className={styles.lastbox}>
                    <h1>{produto.tamanho}</h1>
                </div>
                <div className={styles.verticalline}></div>
            </div>
            <hr className={styles.divider}></hr>
        </div>
    )
}

export default Card_product;