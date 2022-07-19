// responses - pull all the responses for user id

const main = $("#mainSessions");
const tutorCard = $("#tutor-card");

const renderErrorDiv = () => {
  const error = `<div class="uk-alert-warning" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>Currently, there are no matches. Matches do not show instantaneously so please refresh the page. </p>
</div>`;
  main.append(error);
};

const renderTutorCard = (data) => {
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
const renderStudentCard = (data) => {
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
  const { data, success } = await response.json();

  if (success) {
    const promises = data.map(async (response) => {
      console.log(response);
      if (response.studentId !== null) {
        const studentResponse = await fetch(
          `/api/student/${response.studentId} `,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const student = await studentResponse.json();

        renderStudentCard(student.data);
      }
      if (response.studentId === null && response.tutorId !== null) {
        const tutorResponse = await fetch(`/api/tutor/${response.tutorId} `, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const tutor = await tutorResponse.json();
        renderTutorCard(tutor.data);
      }
    });
    await Promise.all(promises);
  } else {
    renderErrorDiv();
  }
};

$(document).ready(handleSessionCard);
