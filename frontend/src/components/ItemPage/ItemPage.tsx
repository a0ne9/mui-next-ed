import { useRouter } from "next/router"
import * as React from "react";



const ItemPage:React.FC = () => {
    const { query } = useRouter() 
    console.log(query);
    
    return (
        <>
        <h1>Тут должна быть страничбка с энергетиком конкретным</h1>
        <h1>Но Максим сказал не прикручивать сие чудо</h1>
        <h1>Поэтому параметры запроса демонстрирую: {JSON.stringify(query)}</h1>
        
        </>
    )
}
export default React.memo(ItemPage);