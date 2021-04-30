import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = []
    // console.log("notesSnap: ",notesSnap)
    notesSnap.forEach(note => {
        // console.log("note: ", note.data())
        notes.push({
            id:note.id,
            ...note.data()
        })
    });
    
    console.log("notes: ",notes)
    return notes
}
