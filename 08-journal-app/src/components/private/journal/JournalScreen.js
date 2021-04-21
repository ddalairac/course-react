import React from 'react'
import { NothigSelected } from './NothigSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <SideBar />
            <main>
                {/* <h1>Journal Screen</h1> */}
                <NothigSelected/>
            </main>
        </div>
    )
}
