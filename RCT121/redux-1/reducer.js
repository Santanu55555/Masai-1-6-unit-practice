export const reducer=(state,action)=>
{
switch (action.type){
    case "INCREMENT":
        {
            return{
                ...state,
                count:state.count++,
            }
        }
        case "DECREMENT":
        {
            return{
                ...state,
                count:state.count--,
            }
        }
        case "ADD":
        {
            return{
                ...state,
             
            }
        }
        case "MUTIPLE":
            {
                return{
                    ...state,
                    
                }
            }
            case "SUB":
                {
                    return{
                        ...state,
                        
                    }
                }
                case "DIVID":
                    {
                        return{
                            ...state,
                            
                        }
                    }
}
}