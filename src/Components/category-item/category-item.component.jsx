import "./category-item.styles.scss";
import CategoryContianer from "./category-container/category-container";
const CategoryItem = ({ category }) => {
  return (
    <div className="categories-container">
      {category.map(({ id, title, imageUrl }) => {
        return <CategoryContianer key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default CategoryItem;
