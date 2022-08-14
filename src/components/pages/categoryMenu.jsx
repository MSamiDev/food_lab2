//package
import { useParams, Link } from "react-router-dom";

//data
import categoryData from "../../Data/categoryData.json";

const CategoryMenu = () => {
    const { slug } = useParams();
    const category = categoryData.categories.find(
        (category) => category.slug === slug
    );

	return (
		<div className="categoryMenu">
			<div>
				<ul>
					<li className="li0">See Dishes 👉 </li>
                    
                        {category.items.map((dish) => {
                            return (
                                <li key={dish._uid}>
                                    <h1>
                                        {dish.name}
                                    </h1>
                                    <img src={dish.image} alt="" />
                                </li>
                            );
                        })}
                    
					<li className="li1">👈 See Categories</li>
				</ul>
			</div>
		</div>
	);
};
export default CategoryMenu;
