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
            <Button title="Vibrate once for 100ms" onPress={() => navigator.vibrate(200)}/>


        </div>
    );
}

export default Project3;