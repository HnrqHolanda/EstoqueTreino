import React from "react";
import styles from "../styles/perms.module.css"
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import SideBar from "../components/sidebar";

function Perms(){
    const { user, loading } = useContext(AppContext);

    return(
        <div className={styles.Container}>
            <SideBar user={user}/>
            <h1>Permissões</h1>
        </div>
    )
}

export default Perms;