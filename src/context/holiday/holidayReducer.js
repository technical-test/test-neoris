import { 
    LIST_EDIT_DATE,
    SELECT_EDIT_DATE,
    ADD_LIST_DATE,
    LIST_ID_DATE,
    ID_SELECT,
    PUT_EDIT_DATE
} from '../types';


export default (state, action) => {


    const pruebaFunction =(object)=>{
        const dd=[]
        for(let key in object){
            dd.push(object[key]['_ids'])
        }
        return dd
    }

    switch(action.type) {
        case SELECT_EDIT_DATE:
            return {
                ...state,
                selectEditDate:action.payload
            }
        case LIST_EDIT_DATE:
            return {
                ...state,
                listEditDate:action.payload,
                listIdDate:state.listIdDate
            }
        case ADD_LIST_DATE:
            return {
                ...state,
                addListDate:action.payload,
                putListDate:null,
                listEditDate:[...state.listEditDate, action.payload],
                listIdDate:state.listIdDate ?[...state.listIdDate,action.payload._ids] : [action.payload._ids]
            }
        case LIST_ID_DATE:
            return {
                ...state,
                listIdDate:pruebaFunction(action.payload).filter((item, pos, self) => self.indexOf(item) === pos)
            }  
        case ID_SELECT:
            return {
                ...state,
                idSelect:action.payload
            }
        case PUT_EDIT_DATE:
            return {
                ...state,
                addListDate:null,
                 putListDate:action.payload,
                listEditDate:state.listEditDate.map(d => d._ids === action.payload._ids ? action.payload :d )
            }                                          
        default:
            return state;
    }
}