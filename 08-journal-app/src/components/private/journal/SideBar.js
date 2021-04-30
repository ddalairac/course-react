import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from './JournalEntries'
import { startlogoutMW } from '../../../actions/auth'
import { startNewNoteMW } from '../../../actions/notes';
export const SideBar = () => {
    const dispatch = useDispatch();
    const { fullname } = useSelector(store => store.auth)
    function handleLogout() {
        dispatch(startlogoutMW())
    }
    function handleNewNote(){
        dispatch(startNewNoteMW());
    }
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h5><i className="fas fa-moon" /> {fullname}</h5>
                <button className="btn" onClick={handleLogout}>Logout</button>
            </div>
            <div className="journal__new-entry" onClick={handleNewNote}>
                <i className="fas fa-calendar-plus fa-5x mb-5" />
                <p>Nueva entrada</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
