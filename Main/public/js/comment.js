const newFormHandler = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#comments').value.trim();
    
    if (content) {
        const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
            'Content-Type': 'application/json',
        },
        });
        
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to create comment');
        }
    }
    };

document
    .querySelector('.form-group-comments-submit')
    .addEventListener('submit', newFormHandler);