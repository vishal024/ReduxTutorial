import React from "react"

const Header = (props) => {
    console.log("header", props.data)
    return (
        <div>
            {props.data.length > 0 ? (<span className="cart-count">{props.data.length}</span>) : ""}
            <img className="cart-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1NjhZQ0SWrRSQg0KdlAmktd-_Q8lhjNlUA&usqp=CAU" alt="cartIcon" />
        </div>
    )
}

export default Header;