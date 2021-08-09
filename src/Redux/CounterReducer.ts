

export type ActionType = setCounterStartType | counterStartType |
    setInputStartType | inputStartType | inputMaxType |
    setInputMaxtType |
    counterMaxType |
    setCounterMaxType

export type setCounterStartType = ReturnType<typeof setCounterStartAC>
export type counterStartType = ReturnType<typeof counterStartAC>

export type setInputStartType = ReturnType<typeof setInputStartAC> //
export type inputStartType = ReturnType<typeof inputStartAC> //

export type inputMaxType = ReturnType<typeof inputMaxAC >
export type setInputMaxtType = ReturnType<typeof setInputMaxtAC >

export type counterMaxType = ReturnType<typeof counterMaxAC >
export type setCounterMaxType = ReturnType<typeof setCounterMaxAC >


export const inputStartAC = () => ({type: 'INPUT-START'} as const)
export const setInputStartAC = (start:number) => ({type: 'SET-INPUT-START',start} as const)

export const setInputMaxtAC = (max:number) => ({type:'SET-INPUT-MAX' , max} as const)
export const inputMaxAC = () => ({type: 'INPUT-MAX'} as const)



export const counterStartAC = () => ({type: 'COUNTER-START',} as const)
export const setCounterStartAC = (start:number) => ({type: 'SET-COUNTER-START',start} as const)


export const setCounterMaxAC = (max:number) => ({type: 'SET-COUNTER-MAX', max} as const)
export const counterMaxAC = () => ({type: 'COUNTER-MAX'} as const)

export type InitianStateType = typeof initialState

const initialState = {
    counterStart: 0,
    counterMax: 0,
    startValueInput: 0,
    maxValueInput: 0,
}

export function CounterReducer (state = initialState , action:ActionType):InitianStateType  {
   switch (action.type) {
       case 'COUNTER-START': {
           return {
               ...state,
               counterStart: state.counterStart + 1,
           }
       }
       case 'SET-COUNTER-START': {
           return {
               ...state,
               counterStart: action.start
           }
       }
       case 'COUNTER-MAX':{
           return {
               ...state,
               counterMax: state.counterMax + 1,
           }
       }
       case 'SET-COUNTER-MAX': {
           return {
               ...state,
               counterMax: action.max
           }
       }

       case 'INPUT-START': {
           return {
               ...state,
               startValueInput: state.startValueInput + 1
           }
       }
       case 'SET-INPUT-START': {
           return {
               ...state,
               startValueInput: action.start
           }
       }
       case 'INPUT-MAX': {
           return {
               ...state,
               maxValueInput: state.maxValueInput + 1
           }
       }
       case 'SET-INPUT-MAX': {
           return {
               ...state,
               maxValueInput: action.max
           }
       }
       default:
        return state


   }
}
