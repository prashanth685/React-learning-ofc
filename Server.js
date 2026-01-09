
const redux=require("redux")
const createStore=redux.createStore

const BUY_CAKE='BUY_CAKE'



function buyCake(){
  return{
  type:BUY_CAKE,
  info:'first_redux_action'
  }
}

//(prevState,action)=> newState


const initialstate={
  noofCakess:10
}

const reducer=(state=initialstate,action)=>{
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noofCakess:state.noofCakess-1
      }
  
    default:
      return state
  }
}


const store=createStore(reducer)
console.log("inital state",store.getState());
