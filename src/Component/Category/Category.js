import React, { useState } from 'react';
import { useEffect } from 'react';
import chicken from '../../image/delicious-fried-chicken-plate_144627-27383.jpg';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import frozen from '../../image/composition-frozen-food-table.jpg';
import pasta from '../../image/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg';
import burger from '../../image/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg';
import pizza from '../../image/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg'


const category = [
    {
        id: 2,
        title: 'Chicken Fry',
        name: 'Hot And Spicy',
        image: chicken,

    },
    {
        id: 4,
        title: 'Froze Food',
        name: 'Easy and testy',
        image: frozen,

    },
    {
        id: 5,
        title: 'Hot Pasta',
        name: ' Spicy',
        image: pasta,

    },
    {
        id: 6,
        title: 'Burger',
        name: 'Slice Burger',
        image: burger,

    },
    {
        id: 55,
        title: 'Chicken Fry',
        name: 'Chigges and testy',
        image: pizza,

    }
]









const Category = () => {

    const [categorys, setCategorys] = useState([]);


    useEffect(() => {

    }, [])






    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto">
                <div class="flex flex-col  w-full mb-6">
                    <h1 className="text-lg font-bold my-4">Category</h1>
                </div>
                <div class="flex flex-wrap -m-2  ">


                    {
                        category.map(pd => <CategoryDetails pd={pd} />)
                    }





                </div>
            </div>
        </section>
    );
};

export default Category;