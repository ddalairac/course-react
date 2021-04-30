import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreen } from '../notes/NotesScreen'
import { NothigSelected } from './NothigSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {
    const notes = useSelector(state => state.notes)
    const {active} = notes
    return (
        <div className="journal__main-content">
            <SideBar />
            <main>
                {
                    (active)
                        ? (<NotesScreen/>)
                        : (<NothigSelected/>)
                }
                {/* <h1>Journal Screen</h1> */}
                
                
            </main>
        </div>
    )
}
