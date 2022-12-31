import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

export const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "images/BTS_Jimin_Butter_concept_photo_2.png",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "images/BTS_Jungkook_Butter_concept_photo_2.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "images/BTS_Jin_Butter_concept_photo_2.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "images/BTS_V_Butter_concept_photo_2.png",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "images/BTS_J-Hope_Butter_concept_photo_2.png",
      route: "shop/mens",
    },
  ];
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};
