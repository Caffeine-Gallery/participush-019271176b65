import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('participantForm');
  const participantList = document.getElementById('participantList');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    try {
      await backend.addParticipant(name, surname);
      alert('Participant added successfully!');
      form.reset();
      await updateParticipantList();
    } catch (error) {
      console.error('Error adding participant:', error);
      alert('Failed to add participant. Please try again.');
    }
  });

  async function updateParticipantList() {
    try {
      const participants = await backend.getParticipants();
      participantList.innerHTML = '<h2>Participants:</h2>';
      if (participants.length === 0) {
        participantList.innerHTML += '<p>No participants yet.</p>';
      } else {
        const ul = document.createElement('ul');
        participants.forEach(participant => {
          const li = document.createElement('li');
          li.textContent = `${participant.name} ${participant.surname}`;
          ul.appendChild(li);
        });
        participantList.appendChild(ul);
      }
    } catch (error) {
      console.error('Error fetching participants:', error);
      participantList.innerHTML = '<p>Failed to load participants.</p>';
    }
  }

  // Initial load of participants
  await updateParticipantList();
});
