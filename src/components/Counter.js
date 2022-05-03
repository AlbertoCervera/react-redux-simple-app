import { useSelector, useDispatch } from "react-redux"
import { increment,decrement } from "../reducers/counter/index"
import "./Counter.css"



export function Counter() {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    const sumar = () => {dispatch(increment())}
    const restar = () => {dispatch(decrement())}
    
    

    return(
        <div className="contador">
            <div className="container-counter">
                <h1>{counter> 0? counter: "Decrementa"}</h1>
                <button onClick={sumar}>Incrementar</button>
                <button onClick={restar}>Decrementar</button>
            </div>

        </div>
        
    )
}