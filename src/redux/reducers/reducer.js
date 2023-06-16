const INIT_STATE={
    carts:[]
};

const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){ 
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
            if(ItemIndex >= 0){
                state.carts[ItemIndex].qnty += 1 //if the item is addtocart and again user click on addtocart then it increase in quantity rather of showing 2 times ok  
            }else{
                const temp = {...action.payload,qnty:1} // if user has addtocart for the first time then it increase the qnty by only one 
                return{
                       ...state,
                        carts:[...state.carts,temp]
                     }
            }
            // return{
            //     ...state,
            //     carts:[...state.carts,action.payload]
            // }

        case "RMV_CART":
                
            // here whenever we click on trash item then the clicked one get removed remainig other item are shown ok here action.payload contain the id that is clicked ok el.id means all item ok
            const data =state.carts.filter((el)=>el.id !== action.payload)
            return {
                ...state,
                carts : data
            }
        case "RMV_ONE":
            const ItemIndex_dec= state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

            if(state.carts[ItemIndex_dec].qnty >=1){
                const dltitem =state.carts[ItemIndex_dec].qnty -= 1
                console.log(...state.carts,dltitem);
                return{
                    ...state,
                    carts: [...state.carts]
                }
            } else if(state.carts[ItemIndex_dec].qnty ===1){
                const data =state.carts.filter((el)=>el.id !== action.payload);
                return {
                    ...state,
                    carts : data
                }
            }
        default :
            return state
    }
}
export default cartreducer;