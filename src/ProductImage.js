import styles from './ProductImage.module.css';
import ResponsiveImage from './ResponsiveImage';

const ProductImage = (props) => {
    return (
        <div className={styles.image}>
            <ResponsiveImage
                imageSource={ props.imageData.images }
                sizes={ props.imageData.imageSizes }
                sourceDefault={props.imageData.sourceDefault}
                alternate={props.imageData.alt}
            />
        </div>
    );
};

export default ProductImage;