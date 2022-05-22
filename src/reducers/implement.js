 let num = 0;
const changenum = (state = num , action) => {
       switch(action.type){
           case "increment" : return  state + 1;
           case "decrement": return state - 1;
           default : return state; 
       }
};

export default changenum;