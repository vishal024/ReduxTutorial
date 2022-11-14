import React from "react"

const Home = (props) => {
    console.log("Home", props)
    return (
        <div>
            <h1>Home Component</h1>
            <div className="box-container">
                <div className="item-container">
                    <img src="https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg" alt="Iphone" />
                </div>
                <div className="item-detail">
                    <span>I-Phone 13</span>
                    <span>Price-$1000</span>
                    <div>
                        <button onClick={() => props.addToCartHandler({ name: "I-Phone 13", price: 1000 })}>
                            Add to Cart
                        </button>
                        <button style={{ backgroundColor: "#6363cdfc", marginLeft: "5px" }} onClick={() => props.removeToCartHandler()}>
                            Remove from Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;