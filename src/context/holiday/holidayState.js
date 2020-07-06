import React, { useReducer } from 'react';

import holidayContext from './holidayContext'
import holidayReducer from './holidayReducer'
import {clientAxios} from '../../config/axiosClient'
import { 
    LIST_EDIT_DATE,
    SELECT_EDIT_DATE,
    ADD_LIST_DATE,
    LIST_ID_DATE,
    ID_SELECT,
    PUT_EDIT_DATE
} from '../types';

const HolidayState = props => {

    const initialState = {
        listEditDate:[],
        selectEditDate:null,
        addListDate:null,
        putListDate:null,
        listIdDate:[],
        idSelect:null
    }


    const [state, dispatch] = useReducer(holidayReducer, initialState)


    const ListEditDate = async () => {
        const result = await clientAxios.get('/')
        try{
            dispatch({
                type: LIST_EDIT_DATE,
                payload:result.data.holiday
            })
            ListIdDate(result.data.holiday)
        }catch(err){
            console.error(err)
        }
    }
    const SelectEditDate = (date) =>{
        dispatch({
            type:SELECT_EDIT_DATE,
            payload:date
        })
    }
    const AddListDate = async (iTemdate) =>{
        iTemdate['_ids']=state.idSelect.toString()
        const result = await clientAxios.post(`/`,iTemdate)
        setTimeout(()=>{
            try{
                dispatch({
                    type:ADD_LIST_DATE,
                    payload:result.data
                })
            }catch(error){
                console.error(error)
            }
        },500)
    }
    const ListIdDate = (ids) =>{
        dispatch({
            type:LIST_ID_DATE,
            payload:ids
        })
    }
    const IdSelect = (id) =>{
        dispatch({
            type:ID_SELECT,
            payload:id
        })
    }
    const PutEditDate = async (holidayDay) =>{
        holidayDay['_ids']=state.idSelect.toString()
        const result = await clientAxios.put(`/`,holidayDay)
        setTimeout(()=>{
            try{
                dispatch({
                    type:PUT_EDIT_DATE,
                    payload:result.data.holidayss
                })
            }catch(error){
                console.error(error)
            }
        },500)
    }




    return (
        <holidayContext.Provider
            value={{
                editProduct:state.editProduct,
                selectEditDate:state.selectEditDate,
                listEditDate:state.listEditDate,
                addListDate:state.addListDate,
                putListDate:state.putListDate,
                listIdDate:state.listIdDate,
                idSelect:state.idSelect,
                SelectEditDate,
                ListEditDate,
                AddListDate,
                ListIdDate,
                IdSelect,
                PutEditDate
                
            }}
        >
            {props.children}
        </holidayContext.Provider>
        
    )
}

export default HolidayState