import React from 'react'
import { NoteDisplay } from './notes/NoteDisplay'
import { SideBar } from './sidebar/SideBar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <SideBar />
            <NoteDisplay />
        </div>
    )
}
