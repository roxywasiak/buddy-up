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
  const data = await response.json();
  console.log(data);
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
  console.log(data);
};

$("#acceptButton").click(handleAcceptRequest);
$("#rejectButton").click(handleRejectRequest);
