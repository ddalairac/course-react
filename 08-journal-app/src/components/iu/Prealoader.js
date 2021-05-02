import React from 'react'
import { useSelector } from 'react-redux'

export const Prealoader = () => {
    const { loading } = useSelector(store => store.ui)
    return (
        <>
            { loading &&
                <div className="preloader_main">
                    <i className="fas fa-circle-notch fa-spin"></i>
                </div>
            }
        </>
    )
}
