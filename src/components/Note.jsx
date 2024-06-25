import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(text);

	const handleSaveClick = () => {
		handleEditNote(id, newText);
		setIsEditing(false);
	};

	return (
		<div className='note'>
			{isEditing ? (
				<>
					<textarea
						value={newText}
						onChange={(e) => setNewText(e.target.value)}
					></textarea>
					<button onClick={handleSaveClick}>Save</button>
				</>
			) : (
				<>
					<span>{text}</span>
					<div className='note-footer'>
						<small>{date}</small>
						<button onClick={() => setIsEditing(true)}>Edit</button>
						<button onClick={() => handleDeleteNote(id)}>Delete</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Note;
