import React from 'react';

function Cards({ item }) {
  console.log(item);
  return (
    <div className="mt-4 my-3 p-3  dark:bg-slate-900 text-black ">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white hover:cursor-pointer duration-200 p-5">Buy now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
