
import styles from './App.module.css';
import ProductCard from './ProductCard';

let perfumeImageData = {

  images: [
    {
      url: '../images/image-product-mobile-686w480h.jpg',
      width: '600w'
    },
    {
      url: '../images/image-product-desktop-600w900h.jpg',
      width: '601w'
    },
  ],

  imageSizes: [
    {
      condition: '(max-width: 375px)',
      width: '375px'
    },
    {
      condition: '',
      width: '1600px'
    },
  ],

  sourceDefault: '../images/image-product-desktop-600w900h.jpg',
  alt: 'perfume bottle',

};

let perfumeProductData = {
  category: 'Perfume',
  title: 'Gabrielle Essence Eau De Parfum',
  description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  originalPrice: 169.99,
  salePrice: 149.99,
};

function App() {
  return (
    <div className={ styles.App }>
      <ProductCard
        productImageData={ perfumeImageData }
        productInfoData={ perfumeProductData }
      />
      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/mv805">Matt Villa</a>. V 1.0.0
      </div>

    </div>
  );
}

export default App;
