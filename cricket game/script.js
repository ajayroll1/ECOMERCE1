// Very basic placeholders - no backend yet

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatDisplay = document.getElementById('chat-display');
const friendList = document.getElementById('friend-list');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = messageInput.value;
    messageInput.value = ''; // Clear input

    // Simulate the look of a sent message (no real sending)
    chatDisplay.innerHTML += `<p>You: ${message}</p>`; 
}

// Placeholder for updating friends (would fetch live data later)
function updateFriendList() {
    friendList.innerHTML = `
        <li>Alice</li>
        <li>Bob</li>
        <li>Charlie</li>
    `;
} 
