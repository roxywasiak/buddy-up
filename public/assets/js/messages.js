const sendMessageForm = $("#sendMessageForm");

const createMessage = async (event) => {
  event.preventDefault();
  const messageContent = $("#messageInput").val();

  const responseId = window.location.href.split("/").slice(-1);

  payload = { messageContent, responseId };

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
