import React from 'react'
import { Navbar } from '../../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment)
const myEventsList = [{
    title: 'cumpleaños pepe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColog: '#fafafa'
}]
export const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <Navbar />
            <h1>Calendar</h1>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}
