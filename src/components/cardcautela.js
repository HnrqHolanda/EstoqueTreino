import styles from "../styles/components/cardproduct.module.css"

function Cardcautela({produto}){
    return(
        <div className={styles.BigContainer}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.aluno.nome}</h1>
                    <div className={styles.invline}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.aluno.pat}</h1>
                    <div className={styles.invline}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.item.nome}</h1>
                    <div className={styles.invline}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.verticalline}></div>
                    <h1>{produto.item.quantidade} {produto.item.tipo}</h1>
                    <div className={styles.verticalline}></div>
                </div>
                <div className={styles.lastbox}>
                    <h1>{produto.item.tamanho}</h1>
                </div>
                <div className={styles.verticalline}></div>
            </div>
            <hr className={styles.divider}></hr>
        </div>
    )
}

export default Cardcautela;