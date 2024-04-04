
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])
console.log(categories)
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="">
            <p className="text-2xl font-bold">All Category</p>
            {
                categories.map(catagory=> <Link to={`/category/${catagory.id}`} key={catagory.id}>
                    <p className="py-2 text-xl font-bold">{catagory.name}</p>

                </Link> )
                
            }
        </div>
    );
};

export default LeftSideNav;