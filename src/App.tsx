import { useState } from 'react'
import styles from './App.module.css'
import poweredImg from './assets/powered.png'

const App = () => {

  const [heightField, SetheightField] = useState<number>(0);
  const [wheightField, SetwheightField] = useState<number>(0)

  const handleCalculateButton = () => {
    if(heightField && wheightField) {

    } else {
      alert("Digite todos os campos")
    }
  }


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt="" width={150} /> <br />
          <span>Aluno: Nilton</span>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. Desenvolvido pelo polímata Lambert no fim do século XIX.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (Em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => SetheightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.5 (Em kg)"
            value={wheightField > 0 ? wheightField : ''}
            onChange={e => SetwheightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ****
        </div>
      </div>
    </div>
  )
}

export default App;