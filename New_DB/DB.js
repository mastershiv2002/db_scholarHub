function uploadFile(type) {
    let fileName = prompt("Enter the name of the file you want to upload:");

    if (fileName) {
        let listItem = document.createElement('li');
        listItem.textContent = fileName;

        switch(type) {
            case 'notes':
                document.getElementById('notesList').appendChild(listItem);
                break;
            case 'assignments':
                document.getElementById('assignmentsList').appendChild(listItem);
                break;
            case 'questions':
                document.getElementById('questionsList').appendChild(listItem);
                break;
        }
    } else {
        alert("File name cannot be empty!");
    }
}
