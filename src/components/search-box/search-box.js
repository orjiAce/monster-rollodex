import React from 'react';

const SearchBox = ({handleChange, placeholder}) => {

        return (
            <div>
                <input type="search" placeholder={placeholder} onChange={handleChange}/>
            </div>
        );

};

export default SearchBox;