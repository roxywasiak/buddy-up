const sendMessageForm = $("#sendMessageForm");

const createMessage = async (event) => {
  event.preventDefault();
  const messageContent = $("#messageInput").val();

  payload = { messageContent, responseId: 11 };

  // XXX

  const response = await fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.reload();
  }
};

sendMessageForm.submit(createMessage);
