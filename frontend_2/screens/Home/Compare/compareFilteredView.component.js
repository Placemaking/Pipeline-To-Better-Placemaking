import React, { useEffect, useState } from 'react';
import { View,  ScrollView, Pressable, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Text, Button, Divider, List, ListItem, BottomNavigation, Icon } from '@ui-kitten/components';
import { CompareListChecks } from '../../components/Compare/compareListChecks.component.js'
import { styles } from './compare.styles'

import { Header } from '../../components/headers.component';
import { ViewableArea, ContentContainer } from '../../components/content.component';
import { CompareFilterHeader } from '../../components/Compare/compareFilterHeader.component.js'

export function CompareFilteredView(props) {

    const [selectedCompare, setSelectedCompare] = useState([])
    const [stationaryResults, setStationaryResults] = useState([])
    const [peopleMovingResults, setPeopleMovingResults] = useState([])
    const [surveyResults, setSurveyResults] = useState([]) 
    const [compareCount, setCompareCount] = useState(0)
    const [titleIndex, setTitleIndex] = useState(1)
    const activities = ['Stationary Activity Map', 'People Moving', 'Survey']

    useEffect(() => {

        if (stationaryResults.length == 0 && peopleMovingResults.length == 0 && surveyResults == 0) {

            let sm = []
            let pm = []
            let survey = []

            for (let i = 0; i < props.filterCriteria.length; i++){

                if (props.filterCriteria[i].testType == "Stationary Activity Map"){
                    sm.push(props.filterCriteria[i].result)
                }
                else if (props.filterCriteria[i].testType == "People Moving"){
                    pm.push(props.filterCriteria[i].result)
                }
            }

            setStationaryResults(sm)
            setPeopleMovingResults(pm)
            setSurveyResults(survey)
        }

    })

    const selectedActivity = () => {

        if (titleIndex == 1) {
            return stationaryResults
        }
        else if (titleIndex == 2) {
            return peopleMovingResults
        }
        else {
            return surveyResults
        }
    }

    const activityItem = (item, index) => (
        <ListItem>
            <CompareListChecks
                result={item.item}
                compareCount={compareCount}
                addSelected={addSelected}
                removeSelected={removeSelected}
            />
        </ListItem>
    )

    const addSelected = (item) => {
        
        let tmp = selectedCompare
        tmp.push(item)

        setSelectedCompare(tmp)
        setCompareCount(compareCount+1)
    }

    const removeSelected = (item) => {

        let tmp = selectedCompare
        tmp.splice(-1, 1)

        setSelectedCompare(tmp)
        setCompareCount(compareCount-1)
    }

    const onConfirmCompare = async () => {

        let success = false
        let result = null

        if (compareCount == 2) {

        
        }
    }

    return(
        <ViewableArea>
            <Header text={'Select 2 to Compare'}/>
            <ContentContainer>

                <CompareFilterHeader titleIndex={titleIndex} setTitleIndex={setTitleIndex}/>

                <List
                    data={selectedActivity()}
                    ItemSeparatorComponent={Divider}
                    renderItem={activityItem}
                />

                <View>
                    <Button style={styles.confirmCompare} onPress={onConfirmCompare}> Confirm Compare </Button>
                </View>

            </ContentContainer>
        </ViewableArea>
    )
}
