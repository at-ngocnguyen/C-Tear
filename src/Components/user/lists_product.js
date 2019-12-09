import React from 'react';
import { Link } from 'react-router-dom';



class ListsProduct extends React.Component {
    render() {
        var { products } = this.props;
        // console.log(this.props);
        let total;
        return (
            <div className="items1">
                <div className="card_items">
                    <Link to="/">
                        <div className="items_img">
                            <img className="img_items" src={products.img} alt="product_item" />
                        </div>
                        <div className="content_items">
                            <p>{products.name}</p>
                            <h4>
                                <ul className="review">
                                    <li className="star">
                                        {this.showReview(products.review)}
                                    </li>
                                </ul>
                            </h4>
                            <p className="price">${products.price}</p>
                            </div>
                            <div className="button_items">
                                <button onClick={()=>this.addcart(products,total)} type="button" className="btn btn-primary">Add to Cart</button>
                            </div>
                        
                        <div className="clr"></div>
                    </Link>
                </div>
            </div>

        )
    }
    addcart = (product,total) => {
        this.props.addtocart(product,total);
        // console.log(this.props.addtocart(product,total));
        
    }
    showReview(review) {
        var result = [];
        for (var i = 1; i <= review; i++) {
            result.push(<span key={i} className="fa fa-star checked"></span>)
        }
        for (var j = 1; j <= (5 - review); j++) {
            result.push(<span key={i + j} className="fa fa-star-o"></span>)
        }

        return result;
    }

}


export default ListsProduct;
