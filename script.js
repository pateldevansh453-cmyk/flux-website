document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Demo credentials
  const validCredentials = { 'admin':'flux2024', 'user':'user123' };

  if(validCredentials[username] && validCredentials[username] === password){
    localStorage.setItem('fluxUser', username);
    const btn = document.querySelector('.login-button');
    btn.textContent = '✓ Access Granted!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    setTimeout(() => { window.location.href='dashboard.html'; }, 1000);
  } else {
    errorMessage.textContent = '❌ Invalid credentials';
    errorMessage.style.display = 'block';
  }
});

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {
    document.getElementById('errorMessage').style.display='none';
  });
});
