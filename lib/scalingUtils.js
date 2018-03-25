import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scaleH = (size, factor = 1) => {
    const newSize = width / guidelineBaseWidth * size;
    return size + ( newSize - size ) * factor;
}
const scaleV = (size, factor = 1) => {
    const newSize =height / guidelineBaseHeight * size;
    return size + ( newSize - size ) * factor;
}

export {scaleH, scaleV};