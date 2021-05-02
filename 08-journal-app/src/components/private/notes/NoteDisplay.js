import React from 'react'
import { useSelector } from 'react-redux'
import { NoteActive } from './NoteActive'
import { NoteNotSelected } from './NoteNotSelected'

export const NoteDisplay = () => {

    const { active } = useSelector(state => state.notes)
    return (
        <>
            {
                (active)
                    ? (<NoteActive />)
                    : (<NoteNotSelected />)
            }
        </>
    )
}
