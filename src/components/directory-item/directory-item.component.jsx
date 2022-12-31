import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNagivateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNagivateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
