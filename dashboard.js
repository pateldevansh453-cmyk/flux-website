document.addEventListener('DOMContentLoaded', () => {
  const usernameSpan = document.getElementById('usernameDisplay');
  const user = localStorage.getItem('fluxUser') || 'Member';
  if (usernameSpan) usernameSpan.textContent = user;

  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentPage);
  });
});

function logout() {
  if(confirm("Are you sure you want to logout?")) {
    localStorage.removeItem('fluxUser');
    window.location.href = 'index.html';
  }
}
