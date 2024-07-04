const username = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : "";

const createPost = async (event) => {
    event.preventDefault();
  
    const title = document.getElementById('posttitle').value;
    const post = document.getElementById('newpost').value;

    console.log(title)
    console.log(post)
    console.log(username)
    
    if (!username){
        alert('You must be logged in to post!')
    }
    if (title && post) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ username, title, post }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to submit post');
      }
    }
  };
  



  document
    .getElementById('newPostModal')
    .addEventListener('submit', createPost);

document.getElementById('commentModal').addEventListener('show.bs.modal', (event) =>  {
    var button = event.relatedTarget;
    var postId = button.getAttribute('data-post-id');
    var modal = document.getElementById('commentModal');
    modal.querySelector('#postId').value = postId;
});

document.getElementById('newCommentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const postId = document.getElementById('postId').value;
    const comment = document.getElementById('commentText').value;

    const response = await fetch(`/api/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, comment, postId })
    })
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to submit post');
      }
});