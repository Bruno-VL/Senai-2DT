import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import {Camera} from 'expo-camera';
import { event } from 'react-native-reanimated';

const Cameras = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const Foto = async () => {
        if(camera){
            let foto = await camera.takePictureAsync();
            alert('Foto tirada')
            setImageUri(foto.uri)
        }
    }

    return (
        <View style={{ flex: 1 }}>
        <Camera 
        style={{ flex: 1 }} 
        type={type}
        ref={ref => {
            camera = ref;
        }}
        >
            <View
            style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
            }}>
            <TouchableOpacity
                style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
                }}
                onPress={() => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
            </View>
        </Camera>
        {imageUri && <Image source={{uri : imageUri}} style={{height : 300}}/>}
        <Button
            onPress={() => Foto()}
            title="Foto"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
/>
        </View>
    );
    }
 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Cameras;