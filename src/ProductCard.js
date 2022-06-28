import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={styles.card}>
            <ProductImage imageData={props.productImageData}/>
            <ProductInfo infoData={props.productInfoData}/>
        </div>
    );
};

export default ProductCard;