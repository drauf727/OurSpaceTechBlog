const registerFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const name = document.querySelector('#name').value;
  
    if (email && password && name) {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        window.localStorage.setItem("username", JSON.stringify(email));
      } else {
        alert('Failed to register');
      }
    }
  };
  
  document
    .querySelector('.register-form')
    .addEventListener('submit', registerFormHandler);