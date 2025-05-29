const userBtn = document.getElementById('user-btn');
const sidePanel = document.getElementById('side-panel');

// Toggle the side panel when the user clicks the button
userBtn.addEventListener('click', () => {
    sidePanel.classList.toggle('active');
});

// Disconnect button action (just for demonstration)
document.getElementById('disconnect-btn').addEventListener('click', () => {
    alert('Desconectado!');
    sidePanel.classList.remove('active'); // Close the panel after disconnect
});