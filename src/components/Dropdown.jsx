import styles from './Dropdown.module.css'
import { useState } from 'react';



function Dropdown (props){

    const [state, setState] = useState(false)
    const toggle = ()  =>  {setState(!state)}

    return(
        <div className={styles.default}>
            <h2 className={styles.titleText} onClick={toggle}>{props.title}</h2>
            
            {state ?    <div>
                            {props.children}
                        </div> : null}
        </div>
    )
}

export default Dropdown