import React from 'react'
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3><i className="fas fa-moon" /> Diego</h3>
                <button className="btn">Logout</button>
            </div>
            <div className="journal__new-entry">
                <i className="fas fa-calendar-plus fa-5x mb-5" />
                <p>Nueva entrada</p>
            </div>
            
            <JournalEntries/>
        </aside>
    )
}
