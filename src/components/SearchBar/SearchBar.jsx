import React from "react";
import { IoSearch } from 'react-icons/io5';

function SearchBar () {
    return (
        <>
            <form>
                <input type="search" placeholder="Buscar Produtos" class="search__input"
                required />
                <button type="submit" class="search__button">
                <IoSearch />
                </button>
                
            </form>
        </>
    )
}
export default SearchBar;