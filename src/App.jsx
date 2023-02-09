import './App.css'
import Dropdown from './components/Dropdown'
import styles from './components/Dropdown.module.css'
import './components/Dropdown.module.css'

function App(props) {

  return (
    <div className={styles.flexy}>
      <div className={styles.App}>
        <Dropdown title="Menu">
          <h4 className={styles.menu}>Home</h4>
          <h4 className={styles.menu2}>About</h4>
          <h4 className={styles.menu3}>Contact</h4>
        </Dropdown> 
        <h6>by clicking you agree to sell your soul</h6>
      </div>
    </div>
  )
}





export default App
