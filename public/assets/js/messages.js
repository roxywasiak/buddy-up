const sendMessageForm = $("#sendMessageForm");

const createMessage = async (event) => {
  event.preventDefault();
  const messageContent = $("#messageInput").val();

  payload = { messageContent, responseId: 4 };

  const response = await fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Posted ok");
  }
};

sendMessageForm.submit(createMessage);
