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