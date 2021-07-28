import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ pd }) => {
    return (

        <div class="p-2 lg:w-1/3 md:w-1/2 w-full  ">
            <Link className=" ">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-green-500 hover:text-white" >
                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={pd.image} />
                    <div class="flex-grow    ">
                        <h2 class=" title-font font-bold text-gary-900 ">{pd.title}</h2>
                        <p class="  ">{pd.name}</p>
                    </div>
                </div>
            </Link>
        </div>


    );
};

export default CategoryDetails;