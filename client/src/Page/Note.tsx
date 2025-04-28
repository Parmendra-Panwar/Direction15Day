import { useEffect, useState } from "react"
import MyButton from "../Component/MyButton";
import NoteData from "../data/data";
import NoNote from "../Component/NoNote";

function Note() {
    const [numOfNote, SetNumOfNote] = useState(0);
    const [currentNote, SetCurrentNote] = useState(0)
    const [allNotes, setAllNotes] = useState<NoteData[]>([]);
    const [description, setDescription] = useState("")

    useEffect(() => {
        setAllNotes(NoteData);
        SetNumOfNote(NoteData.length)
        setDescription(NoteData[0]?.description || "");
    }, [])

    useEffect(() => {
        if (allNotes.length > 0) {
            setDescription(allNotes[currentNote].description);
        }
    }, [currentNote, allNotes]);

    function submitDescription() {
        const updatedNotes = [...allNotes];
        updatedNotes[currentNote] = {
            ...updatedNotes[currentNote],
            description: description,
        };
        setAllNotes(updatedNotes);
    }

    return (
        <>
            {numOfNote === 0 ? (<NoNote />) : (
                <>
                    <div className="mt-12 min-h-screen bg-white px-6 py-12 flex flex-col items-center">
                        <section className="flex flex-row gap-6 overflow-x-auto scrollbar-hide">
                            {NoteData.map((Note, index) => (
                                <MyButton
                                    key={index}
                                    textInside={Note.title}
                                    onClick={() => SetCurrentNote(index)}
                                />
                            ))}
                        </section>

                        <section>
                            <textarea
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-12 w-60 md:w-150  h-96 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 
                                            focus:ring-sky-400 bg-gray-50 text-gray-800 shadow-sm">
                            </textarea>
                            <MyButton textInside="Submit" limitwidth colorTofill="#00ff00" onClick={submitDescription} />
                        </section>
                    </div>
                </>
            )
            }
        </>
    )
}
export default Note