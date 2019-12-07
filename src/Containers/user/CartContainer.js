import React, { Component } from 'react'
import CartDetail from '../../Components/user/cartDetail'
import CartDetailItems from '../../Components/user/cartDetailItems'
import {connect} from 'react-redux';

class CartContainer extends Component {
    showCartIteams(cartItems) {
        var result = null;
        if(cartItems.length > 0 ){
            result = cartItems.map((cartItems, index) => {
                return  <CartDetailItems key={index} cartItems={cartItems} />  
            });
        }
        return result;
    }
    render() {
        // console.log(this.props.cartItems);
        let {cartItems} = this.props;
        return (
            <CartDetail>
                <div class="main" style={{ marginLeft: '17%', marginRight: '17%' }}>
                    <h2>GIỎ HÀNG</h2>
                    <div style={{ height: '50 px' }}>
                        <img src="../Image Rudu/titleleft-dark.png" />
                    </div>
                    <table class="table cart" border={1}>
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">ẢNH</th>
                                <th scope="col">TÊN SẢN PHẨM</th>
                                <th scope="col">GIÁ</th>
                                <th scope="col" style={{ width: '100px' }}>SỐ LƯỢNG</th>
                                <th scope="col">Tổng số</th>
                                <th scope="col">XÓA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartIteams(cartItems)}
                        </tbody>
                    </table>
                    <div style={{ float: 'right' }}>
                        <button class="btn btn-dark">Tiếp tục mua hàng</button>
                        <button class="btn btn-dark">Xóa</button>
                        <button class="btn btn-dark">Cập nhật</button>
                    </div>
                </div>
            </CartDetail>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.CartReducer
    }
}


export default connect(mapStateToProps, null)(CartContainer)