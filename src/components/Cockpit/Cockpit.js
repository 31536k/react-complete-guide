import React, {useEffect, useRef, useContext} from 'react'
import styleclasses from "./Cockpit.css"
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null)
    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // toggleButtonRef.current.click()
        return () => {
            console.log('[Cockpit.js] cleanup work')
        }
    }, [])

    let btnClass = ''
    if (props.showPersons) {
        btnClass = styleclasses.Red
    }

    const assignedstyles = []
    if (props.personsLength <= 2) {
        assignedstyles.push(styleclasses.red)
    }

    if (props.personsLength <= 1) {
        assignedstyles.push(styleclasses.bold)
    }

    return (
        <div className={styleclasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedstyles.join(' ')}>This is really working!</p>
            <button ref={toggleButtonRef} className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={authContext.login}>log in</button>
        </div>
    )
}

export default React.memo(Cockpit)