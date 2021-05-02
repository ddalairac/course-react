import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
    const notes = useSelector(store => store.notes.notes)
    // console.log("re render JournalEntries", notes)
    return (
        <div className="journal__entries">
            {notes.map(note => (
                <JournalEntry key={note.id} note={note} />
            ))}
        </div>
    )
}
