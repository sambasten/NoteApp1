class NotesApplication{
	let noteList = [];
	constructor (author) {
		this.author = author;
	}

/** Fuction to takes note content and 
* adds to the note list object
*/
create(note_content) {
	noteList.push(note_content);
}

/** function to list out notes in noteList
*/
list(){
	for (var note_id in noteList){
		console.log('Note ID: '+ note_id)
		console.log(noteList[note_id]);
		console.log('By Author' + this.author)
	}
/**function to get the ID of the note and 
*return the content of that index as a string
*/
get(note_id){
	return noteList[note_id];
}

/**function to 
}
}
