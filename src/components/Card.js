import React,{useState,useEffect,useContext} from 'react'
import holidayContext from '../context/holiday/holidayContext'

const CardClass =()=>{
    const holidaysContext = useContext(holidayContext)
    const {selectEditDate,listIdDate,idSelect,PutEditDate,AddListDate } = holidaysContext

    useEffect(()=>{
        if(selectEditDate !== null){
            setHolidayDay(selectEditDate)
        }else{
            setHolidayDay({
                dia:'',
                info:'',
                mes:'',
                motivo:'',
                tipo:''
            })
        }
    },[selectEditDate])


    const [holidayDay, setHolidayDay] = useState({
        dia:'',
        info:'',
        mes:'',
        motivo:'',
        tipo:''
    })
    const [error, saveError] = useState('')

    const { dia,info,mes,motivo,tipo } = holidayDay 

    const handleChange = e => {
        setHolidayDay({
            ...holidayDay,
            [e.target.name] : e.target.value
        })
    }



    const onSubmit = (e) =>{

        e.preventDefault()

        if( dia === '' ||  
        info === '' ||  
        mes === '' ||  
        motivo === '' ||  
        tipo === ''){
        return saveError('todos los campos son obligatorios')
        }

        if (listIdDate.includes( idSelect.toString()) ) {
            saveError('')
            PutEditDate(holidayDay)
            console.log('editado')
        }else{
            saveError('')
            AddListDate(holidayDay)
        }
    }

    return(
        <div>
            {error ? <p>{error}</p> :null}
            <form 
                className="container-card" 
                onSubmit={onSubmit}
            >
                <label>Motivo:</label>
                <input  
                    type="text" 
                    name="motivo"
                    value={motivo}
                    onChange={handleChange} 
                />
                <label>Tipo:</label>
                <select onChange={handleChange} name="tipo" defaultValue={tipo || ''}>
                    <option value="inamovible">inamovible</option>
                    <option value="trasladable">trasladable</option>
                    <option value="nolaborable">nolaborable</option>
                    <option value="puente">puente</option>
                    <option selected value={tipo || ''}>{tipo || ''} X</option>
                </select>

                <label>Dia:</label>
                <input  
                    type="text" 
                    name="dia"
                    value={dia}
                    onChange={handleChange}   
                />
                <label>Mes:</label>
                <input  
                    type="text" 
                    name="mes"
                    value={mes}
                    onChange={handleChange}  
                />
                <label>Info:</label>
                <input  
                    type="text" 
                    name="info"
                    value={info}
                    onChange={handleChange}  
                />
                <input  type="submit" 
                        value="Submit"
                        className="btn-add" 
                />
            </form>
        </div>
    )
}
export default CardClass