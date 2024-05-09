import  React from "react";
import '../Header/Header.css';
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    return (
    <>
       
        <header class="header">
            <div class="container">
             <SearchBar />
            </div>
        </header>
    </>
    )
}
export default Header;