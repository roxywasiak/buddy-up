// responses - pull all the responses for user id

const main = $("#mainSessions");
const tutorCard = $("#tutor-card");

const renderTutorCard = async (data) => {
  const tutorCard = ` <div id="tutor-card">
            <div class="uk-card uk-card-default uk-width-1-2@m">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                    <img
                      class="uk-border-circle"
                      width="40"
                      height="40"
                      src="/assets/images/user.jpg"
                    />
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                      ${data.firstName}  ${data.lastName}-  Tutor
                    </h3>
                    <a 
                      href=""
                      class="uk-icon-button uk-margin-small-right"
                      uk-icon="twitter"
                    ></a>
                    <a
                      href=""
                      class="uk-icon-button uk-margin-small-right"
                      uk-icon="facebook"
                    ></a>
                    <a href="" class="uk-icon-button" uk-icon="youtube"></a>
                  </div>
                </div>
              </div>
              <div class="uk-card-body">
                <p>
                ${data.email}
                </p>
                <p>
                 ${data.calendlyLink}
                </p>
              </div>
              <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text"
                  >Read Bio for more information</a
                >
              </div>
            </div>
          </div>`;
  main.append(tutorCard);
};
const renderStudentCard = async (data) => {
  const studentCard = ` <div id="student-card">
            <div class="uk-card uk-card-default uk-width-1-2@m">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                    <img
                      class="uk-border-circle"
                      width="40"
                      height="40"
                      src="./assets/images/user.jpg"
                    />
                  </div>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">
                 ${data.firstName}  ${data.lastName} -  Buddy
                    </h3>
                    <a
                      href=""
                      class="uk-icon-button uk-margin-small-right"
                      uk-icon="twitter"
                    ></a>
                    <a
                      href=""
                      class="uk-icon-button uk-margin-small-right"
                      uk-icon="facebook"
                    ></a>
                    <a href="" class="uk-icon-button" uk-icon="youtube"></a>
                  </div>
                </div>
              </div>
              <div class="uk-card-body">
                <p>
               ${data.email}
                </p>
              </div>
              <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text"
                  >Read Bio for more information</a
                >
              </div>
            </div>
          </div>`;
  main.append(studentCard);
};

const handleSessionCard = async () => {
  // append to card then do for each to append to each card

  const response = await fetch("/api/response", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(response);
  console.log(data);
  if (data.success) {
    const studentId = data.dataValues.studentId;
    const tutorId = data.dataValues.tutorId;
    if (studentId !== null) {
      console.log(data.dataValues);
      const response = await fetch(`/api/student/${{ studentId }} `, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      await renderStudentCard(data.data);
    }

    if (tutorId !== null) {
      const response = await fetch(`/api/tutor/${tutorId} `, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      await renderTutorCard(data.data);
    }
  } else {
    alert("Failed to get response");
  }
};

handleSessionCard();
