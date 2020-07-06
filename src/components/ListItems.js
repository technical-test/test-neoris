import React,{Fragment,useEffect, useContext} from 'react'
import ClassRoom from './ClassRoom'
import holidayContext from '../context/holiday/holidayContext'
import {ReplaceItems} from './ReplaceItems'


const ListItems =({items})=>{
    
    const holidaysContext = useContext(holidayContext)
    const {ListEditDate, listEditDate } = holidaysContext
    
    useEffect(()=>{
        ListEditDate()
    },[]) 


    
    return(
        <div className="content-class">
            <table responsive="sm" variant="dark" >
            <thead>
                <tr>
                    <th>motivo</th>
                    <th>Tipo</th>
                    <th>dia</th>
                    <th>mes</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {
                    listEditDate 
                    ?
                    ReplaceItems(listEditDate,items)
                    :
                    items && items.map(
                        (item) =>(
                            <Fragment key={item.id}>
                                <ClassRoom 
                                    item={item}
                                />
                            </Fragment>
                        )
                    )
                }
            </tbody>
            </table>
        </div>
    )

}
export default ListItems