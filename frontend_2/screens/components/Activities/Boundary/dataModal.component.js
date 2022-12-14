import React from 'react';
import { View, Modal} from 'react-native';
import { useTheme, Text, Button } from '@ui-kitten/components';

import { styles } from './dataModal.styles';

export function DataModal(props) {

    const theme = useTheme();
    
    const sendData = async (desc) => {
        let data = {
            description: desc
        }
        
        // closes the modal (in boundaryTest)
        await props.closeData(data);
    }

    return(
        <Modal transparent={true} animationType='slide' visible={props.visible}>
            <View style={styles.modalContainer}>
                <View style={[ styles.viewContainer, {backgroundColor:theme['background-basic-color-1']}]} >
                        
                    <Text category={'h1'} style={styles.titleText}>Boundary Description</Text>
                    <View style={styles.dataView}>
                                
                        <View style={styles.titleDesc}>
                            <Text category={'s1'} style={styles.titleDescTxt}>Select the best description for the boundary you marked</Text>
                        </View>
                        {/* CHECK THESE BUTTONS FOR ALL (3) MODALS TO MAKE SURE THEY WORK WELL */}
                        <View>
                            <View style={styles.buttonRow}>
                                <Button style={styles.button} onPress={()=> sendData(props.desc[0])}>
                                    <View>
                                        <Text style={styles.buttonTxt}>{props.desc[0]}</Text>
                                    </View>
                                </Button>
                                <Button style={styles.button} onPress={()=> sendData(props.desc[1])}>
                                    <View>
                                        <Text style={styles.buttonTxt}>{props.desc[1]}</Text>
                                    </View>
                                </Button>
                            </View>

                            <View style={styles.buttonRow}>
                                <Button style={styles.button} onPress={()=> sendData(props.desc[2])}>
                                    <View>
                                        <Text style={styles.buttonTxt}>{props.desc[2]}</Text>
                                    </View>

                                </Button>
                                <Button style={styles.button} onPress={()=> sendData(props.desc[3])}>
                                    <View>
                                        <Text style={styles.buttonTxt}>{props.desc[3]}</Text>
                                    </View>
                                </Button>
                            </View>

                            <View style={styles.lastButtonView}>
                                <Button style={styles.button} onPress={()=> sendData(props.desc[4])}>
                                    <View>
                                        <Text style={styles.buttonTxt}>{props.desc[4]}</Text>
                                    </View>
                                </Button>
                            </View>

                            <View style={styles.multiView}>
                                <Button style={styles.backButton} onPress={() => props.back()}>
                                    <View>
                                        <Text style={styles.backButtonTxt}>Back</Text>
                                    </View>
                                </Button>
                            </View>

                        </View>
                    </View>                      
                </View>
            </View>
        </Modal>
    )
}