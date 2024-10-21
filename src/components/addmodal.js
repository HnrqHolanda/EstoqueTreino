import styles from "../styles/components/addmodal.module.css"
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

function Addmodal(){

    const[ID, setID] = useState(1);
    const[nome, setNome] = useState("");
    const[categoria, setCategoria] = useState(" ");
    const[quantidade, setQuantidade] = useState(0);
    const[tamanho, setTamanho] = useState(" ");
    const [tipo, setTipo] = useState("nulo");


    const navigate = useNavigate();

    //erros
    const [erro1, setErro1] = useState(false);
    const [erro2, setErro2] = useState(false);
    const [erro3, seterro3] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setErro1(false);
        seterro3(false);


        if(nome === '' || ID === 0 || categoria === '' || quantidade === 0 || tamanho === ''){
            setNome('');
            setID(0);
            setTamanho('');
            setCategoria('');
            setQuantidade(0);
            setErro1(true);
        } else{

            try {
                // Cria/atualiza um documento com um ID específico
                await setDoc(doc(db, "itens", ID), {
                    nome: nome,
                    categoria: categoria,
                    quantidade: quantidade,
                    tipo: tipo,
                    tamanho: tamanho,
                  });
            
            } 
            
            catch (e) {
                console.error("Erro ao salvar documento: ", e);
            }
 
            setNome('');
            setID(0);
            setTamanho('');
            setCategoria('');
            setQuantidade('');
        }
         
    };

    return(
      <div className={styles.Container}>
        <h2>Adicionar item</h2>
        <div className={styles.forms}>
          <div className={styles.inputs}>
            <label htmlFor="ID">ID: </label>
            <input
              type="text"
              placeholder="ID"
              id="ID"
              value={ID}
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="Nome">Nome: </label>
            <input
              type="text"
              placeholder="Nome"
              id="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="Categoria">Categoria: </label>
            <input
              type="text"
              placeholder="Categoria"
              id="Categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="Tamanho">Tamanho: </label>
            <input
              type="text"
              placeholder="Tamanho"
              id="Tamanho"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="Quantidade">Quantidade: </label>
            <input
              type="number"
              placeholder="Quantidade"
              id="Quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
          <div className={styles.radio}>
            <div className={styles.roptions}>
              <div>
                  <input
                    type="radio"
                    id="unidades"
                    name="tipoQuantidade"
                    value="unidades"
                    checked={tipo === "unidades"}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                  <label htmlFor="unidades">Unidades</label>
              </div>
              <div>
                  <input
                    type="radio"
                    id="pares"
                    name="tipoQuantidade"
                    value="pares"
                    checked={tipo === "pares"}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                  <label htmlFor="pares">Pares</label>
              </div>
            </div>
          </div>
          {erro1 && (
            <div className={styles.erro}>
              <h4>Formulário não submetido. Preencha os campos vazios</h4>
            </div>
          )}
          {erro3 && (
            <div className={styles.erro}>
              <h4>Formulário não submetido. As Nomes não coincidem!</h4>
            </div>
          )}
          <button onClick={handleSubmit}>Adicionar item</button>
        </div>
      </div>  
      
    )
}

export default Addmodal;