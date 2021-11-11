import React from 'react'
import "./Body3.css"
import Bodycart from './Bodycart'
import Bodycart2 from './Bodycart2'

const Body3 = () => {

    // const [cardApi, setCardApi] = useState(Shopping);
    // console.log(Shopping)
    return (
       <>
        <div className="main-section">
            <div className="cart-div1">
            <Bodycart />
            <Bodycart2 />

            </div>

            <div className="cart-div2">
            <Bodycart2 />
            <Bodycart />

            </div>

            <div className="cart-div3">
            <Bodycart />
            <Bodycart2 />

            </div>

        </div>
       </>
    )
}

export default Body3;