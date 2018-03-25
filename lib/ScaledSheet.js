import { StyleSheet } from 'react-native';
import { scaleH, scaleV } from './scalingUtils';
import deepMap from './deepMap';

const validScaleSheetRegex = /^(\-)?(\d+(\.\d+)?)@(h|v)(\d+(\.\d+)?)?$/;

const scaleByAnnotation = (value) => {
    if (!validScaleSheetRegex.test(value)) {
        return value;
    }

    const data = value.split('@');
    const size = parseFloat(data[0]);
    const direction = data[1][0];
    const factor = data[1].length > 1 ? parseFloat(data[1].substring(1, data[1].length-1)) : 1;
    if(direction == 'h'){
        return scaleH(size, factor);
    }
    else{
        return scaleV(size, factor);
    }

};

const ScaledSheet = {
    create: styleSheet => StyleSheet.create(deepMap(styleSheet, scaleByAnnotation))
};

export default ScaledSheet;