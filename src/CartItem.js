import React from "react";
class CartItem extends React.Component{
    constructor(){
        super()
        this.state={
            price:'Rs 999',
            title:'Mobile Phone',
            Qty:'Qty: 1',
            img: ""
        }
    }
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    <div style={ {fontSize:25}}>{this.state.title} </div>
                    <div style={ {fontSize:25,color:'#777'}}>{this.state.price}</div>
                    <div style={ {fontSize:25, color:'#777'}}>{this.state.Qty}</div>
                    <div className="cart-item-actions">
                            {/* Buttons    */}
                            <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg"/>
                            <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"/>
                            <img alt="delete" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2874/2874821.svg"/>
                    </div>

                </div>

            </div>
        );
    }

}
const styles={
    image: {
        height: 160,
        width: 140,
        borderRadius: 4, 
        background:'#ccc'
    }
}
export default CartItem;