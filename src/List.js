import React from 'react';


const List = ({aspect}) => {


    return (
        <>
            {aspect.map((aspect) => {
                const{id, name, alternate, image} = aspect;
    return (
            <article className = 'footballAspect' key={id}>
                <img src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <h4>{alternate}</h4>
                </div>
            </article>
    );
    })}
        </>
    );
};


export default List;