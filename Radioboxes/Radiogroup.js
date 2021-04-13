import './Radiogroup.css'
import { useState } from "react"
import { useEffect } from 'react'

const Radiogroup = ({r, id, givenOptions, givenDefaults}) => {

    const [radioGroup, setRadiogroup] = useState([])
    
    // When defaultValues updates check the correct corresponding box
    useEffect(
        ()=> {

            setRadiogroup([])
                let placeholder = []
                givenOptions.forEach(
                    (option) => {
                        let isChecked = false;
                        if (givenDefaults?.name && option.value === givenDefaults.name) {
                            isChecked = true;
                        }
                        let radio = (
                            <div id={id} key={option.value} className="radioElement">
                                <input id={option.display} type="radio" {...r} value={option.value} defaultChecked={isChecked}/>
                                <label htmlFor={option.display}>{option.display}</label>
                            </div>
                        )
                        placeholder.push(radio)
                    }
                )
                setRadiogroup(placeholder)
            

        }, [givenDefaults]
    )

    // Radiogroup setup
    

    return (
        <div className="radiogroup" id={id} >
            {
                radioGroup
            }
        </div>
    )

}

export default Radiogroup