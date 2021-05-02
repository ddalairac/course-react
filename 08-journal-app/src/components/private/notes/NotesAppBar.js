import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNoteMW, startUploadingMW } from '../../../actions/notes';
// react-journal

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(store => store.notes)
    
    function handleSave() {
        console.log("handleSave", note)
        dispatch(startSaveNoteMW(note))
    }
    function handlePinture() {
        // console.log("handlePinture")
        document.querySelector('#fileSelector').click()
    }
    function handleFileChange(e) {
        // console.log("handleFileChangess",e.target.files)
        const file = e.target.files[0]
        if(file){
            dispatch(startUploadingMW(file))
        }

    }
    return (
        <div className="notes__appbar">
            <span>28 de Agosto 2020</span>
            <input id="fileSelector" type="file" name="file" style={{display:'none'}} onChange={handleFileChange}/>
            <div>
                <button className="btn" onClick={handlePinture}>Pinture</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
