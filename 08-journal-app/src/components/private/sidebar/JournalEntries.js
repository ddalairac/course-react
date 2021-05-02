import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
    const notes = useSelector(store => store.notes.notes)
    const sortNotes = notes.sort((a, b) => (a.date < b.date) ? 1 : -1)
    // console.log("re render JournalEntries", sortNotes)
    return (
        <div className="journal__entries">
            {sortNotes.map(note => (
                <JournalEntry key={note.id} note={note} />
            ))}
        </div>
    )
}
