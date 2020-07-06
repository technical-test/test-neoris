import React,{Fragment} from 'react'
import ClassRoom from './ClassRoom'


export const ReplaceItems = (object,items) => {
    
    const drop=[]
    for(let key in items){
        const j = items[key]['id']
        const k = items[key]     
        for(let _key in object){
            const e = object[_key]['_ids']
            const g = object[_key]['id']
            if(e === key && j === g){
                k['dia'] = object[_key]['dia']
                k['info'] = object[_key]['info']
                k['mes'] = object[_key]['mes']
                k['motivo'] = object[_key]['motivo']
                k['tipo'] = object[_key]['tipo']
            }
        }

    drop.push(k) 
    }

    return drop.map((item,i) =>{
    return(
        <Fragment key={i}>
            <ClassRoom 
                item={item}
                itemPrueba={i}
            />
        </Fragment>
        )
    })
}