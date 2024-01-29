import React, { useState } from 'react'
import classes from "./CartRow.module.css"
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import CheckBox from '../CheckBox/CheckBox';
import Counter from '../Counter';
const CartRow = () => {
    const [counter, setCounter] = useState(1)
  return (
    <div className={classes.cartRow}>
            <div className={classes.imageWrapper}>
                <CheckBox isLabelShow={false} bgColor='var(--black-color)'/>
                    <img src={"./images/review.png"}/>
            </div>
            <div className={classes.des__wrapper}>
                <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonl
                </p>
                <p>Color:Red</p>
                <p>55$</p>
            </div>

            <div className={classes.counter}>
<Counter setter={setCounter} value={counter}/>
            </div>

            <div className={classes.delete__wrapper}>
                    <p><FaRegHeart/>Save for later</p>
                    <p><FaRegTrashCan />Delete item</p>
            </div>
    </div>
  )
}

export default CartRow
