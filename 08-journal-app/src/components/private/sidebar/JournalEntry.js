import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNoteAction } from '../../../actions/notes';

export const JournalEntry = ({ note }) => {

    const { id, date, title, body, url } = note
    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(
            activeNoteAction(id, {
                date, title, body, url
            })
        );
    }

    return (
        <div className="journal__entry" onClick={handleEntryClick}>
            {   url &&
                <div className="journal__entry-pinture" style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ url })`
                }}>
                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">{ title }</p>
                <p className="journal__entry-content">{ body }</p>
            </div>
            <div className="journal__entry-date">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
