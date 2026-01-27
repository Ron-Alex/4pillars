import React from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useNavigate } from "react-router";

export default function Editor({}) {

    const placeholder = 'This too will pass...';
    const { quill, quillRef } = useQuill({placeholder});
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (quill) {
            const editorContent = quill.root.innerHTML;
            console.log('Editor Content:', editorContent);
        }
        navigate('/stats');
        
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div id="editor_container">
            <div id="editor" ref={quillRef} />
            <input className="save-btn border border-gray-300 rounded-md px-4 py-2" type="submit" value="Save" onClick={handleSubmit} onKeyDown={handleKeyDown}/>
        </div>
    );
};