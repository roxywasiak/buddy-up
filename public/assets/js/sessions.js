// responses - pull all the responses for user id

const handleAcceptRequest = async (event) => {
  const responseId = $(event.target).data("response");
  console.log(responseId);
  const response = await fetch(`/api/response/${responseId} `, {
    method: "PUT",
    body: JSON.stringify({ status: "completed" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.reload();
  const data = await response.json();
};
const handleRejectRequest = async (event) => {
  const responseId = $(event.target).data("response");
  console.log(responseId);
  const response = await fetch(`/api/response/${responseId} `, {
    method: "PUT",
    body: JSON.stringify({ status: "rejected" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
};

const messagesPage = (event) => {
  event.preventDefault();
  console.log("HERE");
  const target = $(event.target);
  const responseId = target.data("id");

  window.location.assign(`/messages/${responseId}`);
};

$("#acceptButton").click(handleAcceptRequest);
$("#rejectButton").click(handleRejectRequest);

$("#sessions-section").on("click", "#messagesBtn", messagesPage);
