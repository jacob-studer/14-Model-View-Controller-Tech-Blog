const commentFormHandler = async (event) => {
    console.log('works')
    event.preventDefault();
    
    const content = document.querySelector('#comments').value.trim();
    const post_id = document.querySelector('#post-id').value.trim();
    
    if (content && post_id) {
        const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
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

const commentsubmit = document.querySelector('.form-group-comments-submit')

commentsubmit.addEventListener('click', commentFormHandler);