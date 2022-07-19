// ~ DECLARATIONS
const searchAds = $("#searchAds");
const adsSearchDiv = $("#adsSearchDiv");

const handleSearchClick = () => {
  //   Target the subject selected
  const subjectId = $("#searchAds").val();
  console.log(subjectId);
};

// add click event listener
adsSearchDiv.click(handleSearchClick);
