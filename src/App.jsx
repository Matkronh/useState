import './App.css'
import Dropdown from './components/Dropdown'
import styles from './components/Dropdown.module.css'
import './components/Dropdown.module.css'

function App(props) {

  return (
    <div className={styles.flexy}>
      <div className={styles.App}>
        <Dropdown title="Menu">
          <h4 className={styles.basicFormat}>Home</h4>
          <h4 className={styles.basicFormat}>About</h4>
          <h4 className={styles.basicFormat}>Contact</h4>
        </Dropdown> 
      </div>
    </div>
  )
}



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('basicFormatShow')
    }
  })
})

const transitionElements = document.querySelectorAll('.basicFormat');
transitionElements.forEach((el) => observer.observe(el));

export default App
