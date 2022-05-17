import { Directory } from "../../directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Albums",
      imageUrl: "images/BTS_Jimin_Butter_concept_photo_2.png",
    },
    {
      id: 2,
      title: "Tour Merch",
      imageUrl: "images/BTS_Jungkook_Butter_concept_photo_2.png",
    },
    {
      id: 3,
      title: "Merch",
      imageUrl: "images/BTS_Jin_Butter_concept_photo_2.png",
    },
    {
      id: 4,
      title: "Book",
      imageUrl: "images/BTS_V_Butter_concept_photo_2.png",
    },
    {
      id: 5,
      title: "DVD",
      imageUrl: "images/BTS_J-Hope_Butter_concept_photo_2.png",
    },
  ];
  return <Directory categories={categories} />;
};

export default Home;
