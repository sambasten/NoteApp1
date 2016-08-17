class NotesApplication{
	
	constructor (author) {
		this.author = author;
		this.noteList = [];
	}

/** Fuction to takes note content and 
* adds to the note list object
*/
create(note_content) {
	  this.noteList.push(note_content);
	return this.noteList;
}

/** function to list out notes in noteList
*/
list(){
	for (let note_id in this.noteList){
		console.log('Note ID: '+ note_id);
		console.log(this.noteList[note_id]);
		console.log('By Author ' + this.author)
	}
}
/**function to get the ID of the note and 
*return the content of that index as a string
*/
toGet(note_id){
	if(this.noteList.length === 0){
		return  'empty'
	}
	return this.noteList[note_id];
}

/**function to search text
*/
search(search_text){
		for(let note_id in this.noteList){
			if (this.noteList[note_id].includes(search_text)){
				console.log('Showing result for search: ' + '['+search_text+']');
				console.log('Note ID: '+ note_id);
				console.log(this.noteList[note_id]);
				console.log('By Author ' + this.author)
			}
			return 'Not Found'
		}
}

/**function to delete note id
*/
toDelete(note_id){
	this.noteList.splice(note_id);
	return this.noteList;
}

/**function to edit note content
*/
edit(note_id, new_content){
	this.noteList[note_id] = new_content
	return this.noteList;
}
}
