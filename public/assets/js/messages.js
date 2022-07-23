const sendMessageForm = $("#sendMessageForm");
const refreshBtn = $("#refreshBtn");

const createMessage = async (event) => {
  event.preventDefault();
  const messageContent = $("#messageInput").val();

  const responseId = window.location.href.split("/").slice(-1);

  payload = { messageContent, responseId };

  if (messageContent) {
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
  }
};

const refreshScreen = () => {
  window.location.reload();
};

sendMessageForm.submit(createMessage);
refreshBtn.on("click", refreshScreen);
