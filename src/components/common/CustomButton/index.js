import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({ title, primary, secondory, danger, disabled, loading, ...props }) => {
    // const [focused, setFocused] = useState(false);
     const getBgColor = () => {
         if(disabled){
             return colors.grey
         }
        if (primary) {
            return colors.primary1
        }
        if (danger) {
            return colors.danger
        } if(secondory) {
            return colors.secondary1
        }
    }
    return (
        <TouchableOpacity style={[styles.wrapper,{backgroundColor:getBgColor()}]} {...props}>
            <View style={styles.loaderSection}>
                {loading&&<ActivityIndicator  color={colors.primary}/>}
            {title && <Text style={{color
            : disabled ? 'black':colors.white,fontSize:16}}>{title}</Text>}
            </View>
            
        </TouchableOpacity>
    )
}

export default CustomButton;