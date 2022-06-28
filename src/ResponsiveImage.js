import styles from './ResponsiveImage.module.css';
/*
props.imageSource = [
    {
        url: './images/image1.png',
        width: '480w'
    },
    {
        url: './images/image2.png',
        width: '1000w'
    },
    {
        url: './images/image3.png',
        width: '2000w'
    },
]

props.sizes = [
    {
        condition: '(min-width: 1800px)',
        width: '2000px'
    },
    {
        condition: '(min-width: 1500px) and (max-width: 1799px)',
        width: '1500px'
    },
    {
        condition: '',
        width: '480px'
    },
]

props.sourceDefault = './images/image1.png'
props.alternate = 'alt description of the image'
*/

const ResponsiveImage = (props) => {

    const sourceFormat = (sourceData) => {

        let source = [];

        sourceData.forEach((imageInfoObj, index) => {
            source.push(`${imageInfoObj.url} ${imageInfoObj.width}`.trim());
        });

        return source.join(', ');
    };

    const sizeFormat = (sizeData) => {

        let size = [];

        sizeData.forEach((imageInfoObj, index) => {
            size.push(`${imageInfoObj.condition} ${imageInfoObj.width}`);
        });

        return size.join(', ');
    };

    return (
        <img
            srcSet={sourceFormat(props.imageSource)}
            sizes={sizeFormat(props.sizes)}
            src={props.sourceDefault}
            alt={props.alternate} 
            className = {styles.image}    
            />
    );
};

export default ResponsiveImage;