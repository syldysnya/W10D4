import { Provider} from "react-redux"
import React from "react"
import App from "./app"


const Root = ({ store }) => {
    debugger
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
   
}


export default Root;