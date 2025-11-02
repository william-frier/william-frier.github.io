import React from "react";
import '../../style.css';

import {
    Button,
    Platform,
    Text,
    Vibration,
    View,
    StyleSheet,
  } from 'react-native';



function Project3() {
    return(
        <div>
            <h1>Project 3 - Haptics</h1>

            <h5><em>Test with Android</em></h5>
            <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />


        </div>
    );
}

export default Project3;