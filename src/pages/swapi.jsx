import { useState } from "react"
import {sendApi} from "../redux/swapiAction"
import { useDispatch, useSelector } from "react-redux"

export default function Swapi() {
    const [inputValue, setInputValue] = useState('')
    const swapiList = useSelector((store) => store.swapi)
    const dispatch = useDispatch()

    return (
        <>
            <h1>https://swapi.py4e.com/api/</h1>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button id="swapi-send" onClick={() => dispatch(sendApi(inputValue))}>Send</button>
            <pre>{JSON.stringify(swapiList, null, 2)}</pre>
        </>
    )
}