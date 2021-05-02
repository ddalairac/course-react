import React from 'react'
import { useSelector } from 'react-redux'
// import { NoteEdit } from './notes/NoteEdit'
import { NoteActive } from './notes/NoteActive'
import { NoteNotSelected } from './notes/NoteNotSelected'
import { SideBar } from './sidebar/SideBar'

export const JournalScreen = () => {
    const { active } = useSelector(state => state.notes)
    return (
        <div className="journal__main-content">
            <SideBar />
            <main>
                {/* <NoteEdit /> */}
                {
                    (active)
                        ? (<NoteActive />)
                        : (<NoteNotSelected />)
                }
            </main>
        </div>
    )
}
