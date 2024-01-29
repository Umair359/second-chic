import React from 'react'
import classes from "./Counter.module.css"
const Counter = ({setter , value}) => {
    const counterFunction = (type) => {
        if(type === "inc"){
            setter(value + 1)
        }
        if(type === "dec" && value > 1){
            setter(value - 1)
        }
    }
    
  return (
    <div className={classes.main}>
            <p onClick={() => counterFunction("dec")}>-</p>
            <p>{!value ? 1 : value}</p>
            <p onClick={() => counterFunction("inc")}>+</p>
    </div>
  )
}

export default Counter