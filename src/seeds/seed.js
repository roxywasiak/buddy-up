//require the files
const connection = require("../config/connection");
const {
  Ad,
  Review,
  Price,
  Response,
  Report,
  Student,
  Subject,
  Tutor,
  TutorSubject,
} = require("../models");

const ad = require("./ad.json");
const review = require("./review.json");
const price = require("./price.json");
const response = require("./response.json");
const student = require("./student.json");
const subject = require("./subject.json");
const tutor = require("./tutor.json");
const tutorSubject = require("./tutorSubject.json");
const report = require("./report.json");

//variables to store the table entity names
const seedAds = async () => {
  const promises = ad.map((ad) => Ad.create(ad));
  await Promise.all(promises);
  console.log("Successfully seeded ad");
};

const seedReviews = async () => {
  const promises = review.map((review) => Review.create(review));
  await Promise.all(promises);
  console.log("Successfully seeded reviews");
};

const seedPrices = async () => {
  const promises = price.map((price) => Price.create(price));
  await Promise.all(promises);
  console.log("Successfully seeded prices");
};

const seedResponses = async () => {
  const promises = response.map((response) => Response.create(response));
  await Promise.all(promises);
  console.log("Successfully seeded responses");
};

const seedStudents = async () => {
  const promises = student.map((student) => Student.create(student));
  await Promise.all(promises);
  console.log("Successfully seeded students");
};

const seedSubjects = async () => {
  const promises = subject.map((subject) => Subject.create(subject));
  await Promise.all(promises);
  console.log("Successfully seeded subjects");
};

const seedTutors = async () => {
  const promises = tutor.map((tutor) => Tutor.create(tutor));
  await Promise.all(promises);
  console.log("Successfully seeded tutors");
};

const seedTutorSubject = async () => {
  const promises = tutorSubject.map((tutorSubject) =>
    TutorSubject.create(tutorSubject)
  );
  await Promise.all(promises);
  console.log("Successfully seeded tutor subjects");
};

const seedReports = async () => {
  const promises = report.map((report) => Report.create(report));
  await Promise.all(promises);
  console.log("Successfully seeded reports");
};
//promise/map/create
//await
//console.log if seeded

//init function
const init = async () => {
  try {
    console.log("Seeding database...");
    await connection.sync({ force: true });

    //seed all data from entities
    await seedPrices();

    await seedTutors();

    await seedStudents();

    await seedSubjects();

    await seedTutorSubject();

    await seedAds();

    await seedResponses();

    await seedReviews();

    await seedReports();

    console.log("Seeding complete!!");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed | ${error.message}`);
  }

  // kill node process
  process.exit(0);
};

init();
