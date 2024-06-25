import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const LOCAL_STORAGE_KEY = 'newnote-data';

const App = () => {
	const [notes, setNotes] = useState(() => {
		const savedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		return savedNotes || [];
	});

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		setNotes((prevNotes) => [...prevNotes, newNote]);
	};

	const deleteNote = (id) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
	};

	const editNote = (id, newText) => {
		setNotes((prevNotes) =>
			prevNotes.map((note) =>
				note.id === id ? { ...note, text: newText } : note
			)
		);
	};

	return (
		<div className='container'>
			<Header />
			<NotesList
				notes={notes}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
				handleEditNote={editNote}
			/>
		</div>
	);
};

export default App;


