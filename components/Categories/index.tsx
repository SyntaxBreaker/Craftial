import Image from "next/image";
import styles from "./categories.module.scss";

interface ICategories {
    imageURL: string;
    name: string;
}

const categories: ICategories[] = [
    {
        imageURL:
            "https://cdn.pixabay.com/photo/2019/11/22/18/41/christmas-4645449_960_720.jpg",
        name: "Toys",
    },
    {
        imageURL:
            "https://cdn.pixabay.com/photo/2019/11/22/18/41/christmas-4645449_960_720.jpg",
        name: "Wood working",
    },
    {
        imageURL:
            "https://cdn.pixabay.com/photo/2019/11/22/18/41/christmas-4645449_960_720.jpg",
        name: "Robotics",
    },
    {
        imageURL:
            "https://cdn.pixabay.com/photo/2019/11/22/18/41/christmas-4645449_960_720.jpg",
        name: "Art",
    },
    {
        imageURL:
            "https://cdn.pixabay.com/photo/2019/11/22/18/41/christmas-4645449_960_720.jpg",
        name: "Beauty",
    },
    {
        imageURL:
            "https://cdn.pixabay.com/photo/2019/11/22/18/41/christmas-4645449_960_720.jpg",
        name: "Computers",
    },
];

function Categories() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.categories}>
                <h2>Categories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.name}>
                            <div>
                                <Image
                                    src={category.imageURL}
                                    height="100px"
                                    width="100px"
                                    alt=""
                                />
                            </div>
                            <p>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Categories;
