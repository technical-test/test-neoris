
import React, {useContext } from 'react'
import holidayContext from '../context/holiday/holidayContext'

const ClassRoom =({item,itemPrueba})=>{

    const holidaysContext = useContext(holidayContext)
    const {SelectEditDate,IdSelect } = holidaysContext

    
    const onClick =(item)=>(e)=>{
    e.preventDefault()
        IdSelect(itemPrueba)
        SelectEditDate(item)
    }

    return(
        <tr>
            <td>{item.motivo}</td>
            <td>{item.tipo}</td>
            <td>{item.dia}</td>
            <td>{item.mes}</td>
            <td><input 
                    type="button"
                    className="btn-add" 
                    value="Edit"
                    onClick={onClick(item)}
                />
            </td>
        </tr>
    )
}

export default ClassRoom