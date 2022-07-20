// ~ DECLARATIONS
const searchAds = $("#searchAds");
const adsSearchDiv = $("#adsSearchDiv");
const subjectAds = $("#subjectAds");

const handleSearchClick = async () => {
  subjectAds.empty();
  //   Target the ID of subject selected
  const subjectName = $("#adsSearchDiv option:selected").val();

  //   const response = await fetch(`/api/ad/view/subject/${subjectName}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   console.log(response);

  window.location.assign(`/api/ad/view/subject/${subjectName}`);
};

// add click event listener
adsSearchDiv.click(handleSearchClick);
