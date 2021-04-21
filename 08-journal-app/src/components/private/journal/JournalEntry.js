import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-pinture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.viajeselcorteingles.es/blog/wp-content/uploads/2020/07/img-blog-valencia-des.jpg)'
            }}>
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
