import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';

import TimeForm from '../components/TimeForm';

function NewActivityTimes(){
    const loc = useLocation();
    const [activity, setActivity] = React.useState({
        title: loc.state.title,
        activity: loc.state.activity,
        date: loc.state.date,
        timer: loc.state.timer,
        number: 0
    });

    const [timeSlots, setTimeSlots] = React.useState([]);

    const testNames = {
        stationaryCollections: 'Humans in Place',
        movingCollections: 'Humans in Motion',
        orderCollections: 'Absence of Order Locator',
        boundaryCollections: 'Spatial and Shelter Boundaries',
        lightingCollections: 'Lighting Profile',
        natureCollections: 'Nature Prevalence',
        soundCollections: 'Acoustical Profile'
    };

    const timeCards = (timeSlots) => (
        timeSlots.map((value, index)=>(
            <Card key={ index } className='timeSlots'>
                <Card.Body>
                    <TimeForm index={ index } deleteTime={ deleteTimeSlot }/>
                </Card.Body>
            </Card>
        ))
    );

    function newTime(e){
        var temp = timeSlots;
        temp.push(1);
        setTimeSlots(temp);
        //shallow comparison for React to recognize for update
        var num = activity.number;
        num++;
        setActivity({ ...activity, number: num })
    }

    function deleteTimeSlot(index){
        var temp = timeSlots;
        temp = temp.filter((card, ind)=> ind !== index);
        setTimeSlots(temp);
        //console.log(temp);
    }

    return(
        <div id='newActivityTimes'>
            <Card id='timeCard'>
                <Card.Header >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h1>{ activity.title }</h1>
                        <Button id='createActivityButton'>Schedule Activity <DoneIcon /></Button>
                    </div>
                    Category: { testNames[activity.activity] }
                    <br />
                    Date: { activity.date }
                    <br />
                    Time per Location: { activity.timer }
                </Card.Header>
                <Card.Body id='timeCardContent'>
                    <Button id='newTimeButton' onClick={ newTime } className='scheme'>New Time Slot</Button>
                    { timeCards(timeSlots) }
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewActivityTimes;