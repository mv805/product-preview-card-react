import styles from './ProductInfo.module.css';
/*
let perfumeProductData = {
  category: 'Perfume',
  title: 'Gabrielle Essence Eau De Parfum',
  description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  originalPrice: 169.99,
  salePrice: 149.99,
};

*/
const ProductInfo = (props) => {
    return (
        <div className={ styles.info }>
            <small className={`${styles.category} ${styles['main-text']}`}>{props.infoData.category}</small>
            <h1 className={styles.title}>{props.infoData.title}</h1>
            <p className={`${styles.description} ${styles['main-text']}`}>{props.infoData.description}</p>
            <div>
                <div className={styles.price}>
                    <em>{`$${props.infoData.salePrice}`}</em>
                    <p className={styles['main-text']}>{`$${props.infoData.originalPrice}`}</p>
                </div>
                <button>
                    <img src="images/icon-cart.svg" alt='shopping cart'/>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;