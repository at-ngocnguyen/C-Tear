import React from 'react';
import ContentProduct from './content_products';
import LineNewProduct from './line_newproduct';
import AboutProduct from './AboutProduct';
import ProductsContainer from '../../Containers/user/ProductsContainer';
import ImageProduct from './content_image';


class Content extends React.Component {
    render(){
        return(
            <div className="content">
                <AboutProduct/>
                <ContentProduct />
                <LineNewProduct />
                <ProductsContainer/>
                <ImageProduct />
                <LineNewProduct />
                <ProductsContainer/>
            </div>
        )
    }
}

export default Content;
