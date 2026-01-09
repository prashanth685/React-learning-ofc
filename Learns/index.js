const redux=require("redux")

const CAKE_ORDERED='CAKE_ORDERED'



const createStore=redux.createStore

function orderCake(){
    return{
    type:CAKE_ORDERED,
    quantity:1
}
}
// (previousState,action)=>newState
const initalState={

    numOfCakes : 10,
}

const reducer=(state=initalState,action)=>{
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            }
    
        default:
            return state
    }
}

const store=createStore(reducer)
console.log("intial state",store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('updated state',store.getState())
})

store.dispatch({
    type:CAKE_ORDERED,
    quantity:2
})
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()