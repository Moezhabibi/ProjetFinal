import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"

const ErrorsC =()=>{
    const errorsH = useSelector(state=>state.ErrorsReducer)
    return(
        <div>
            {
                errorsH.map(el=>
                <Alert  variant= 'danger'>
                    {el.msg}
                    
                    </Alert>)
            }
        </div>
    )
}

export default ErrorsC