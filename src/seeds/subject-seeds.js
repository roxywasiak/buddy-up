// import the Subject model
const { Subject } = require("../models");

// create the seeding data for the tutor data
const subjectData = [
  {
    subjectName: "JavaScript",
    details: "",
  },
  {
    subjectName: "english",
    details:
      "The English subject ranges between a wide topics such as reading, thinking, and writing critically and creatively",
  },
  {
    subjectName: "Mathematics",
    details:
      "learning content from specifications, understanding and solving various problems ",
  },
  {
    subjectName: "Spanish",
    details: "Learning to read, write and speak spanish",
  },
  {
    subjectName: "Art",
    details:
      "Learning various different components of art and design and its history",
  },
  {
    subjectName: "Chemistry",
    details:
      "Learning various properties, composition, reactions and structure of elements and compounds",
  },
  {
    subjectName: "Education",
    details:
      "Learning methods of teaching in a schools or school-like environments",
  },
  {
    subjectName: "Music",
    details: "Learning different genres of music",
  },
  {
    subjectName: "Physics",
    details:
      "Learning the phenomena of the universe and to look at theories that explain what is observed",
  },
  {
    subjectName: "law",
    details:
      "Learning the explore the phenomena of the universe and to look at theories that explain what is observed",
  },
];

//fn to to create bulk subjects
const seedCategories = () => Subject.bulkCreate(subjectData);

// export the function
module.exports = seedCategories;
