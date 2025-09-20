function createDialog(title, body, bottomParts) {
    // Create the dialog container
    var dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialog-container');

    // Create the dialog title
    var dialogTitle = document.createElement('div');
    dialogTitle.classList.add('dialog-title');
    dialogTitle.textContent = title;

    // Create the dialog body
    var dialogBody = document.createElement('div');
    dialogBody.classList.add('dialog-body');
    dialogBody.textContent = body;

    
    // Create the dialog bottom section
    var dialogBottom = document.createElement('div');
    dialogBottom.classList.add('dialog-bottom');
    dialogBottom.innerHTML ='<p>对应国民经济分类:</p>'+ bottomParts;


    // Create the close button
    var closeButton = document.createElement('button');
    closeButton.classList.add('dialog-close-button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function () {
        closeDialog();
    });

    // Append the dialog elements to the container

    dialogContainer.appendChild(dialogTitle);
    dialogContainer.appendChild(dialogBody);
    dialogContainer.appendChild(dialogBottom);
    dialogContainer.appendChild(closeButton);

    // Prevent interaction with the rest of the page
    // document.body.addEventListener('click', function (event) {
    //     var dialog = document.querySelector('.dialog-container');
    //     var overlay = document.querySelector('.dialog-overlay');
    //     if (dialog && !dialog.contains(event.target) && overlay) {
    //         event.stopPropagation();
    //     }
    // });

    // Create the overlay
    var overlay = document.createElement('div');
    overlay.classList.add('dialog-overlay');

    document.body.appendChild(overlay);
    // Append the dialog container to the document body
    document.body.appendChild(dialogContainer);
}

function closeDialog() {
    var dialog = document.querySelector('.dialog-container');
    var overlay = document.querySelector('.dialog-overlay');
    if (dialog) {
        document.body.removeChild(dialog);
    }
    if (overlay) {
        document.body.removeChild(overlay);
    }
}