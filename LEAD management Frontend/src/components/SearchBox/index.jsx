import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
    return (
        <>
            <div className="searchBox position-relative d-flex align-items-center">
                <FaSearch className="searchIcon mr-2"/>
                <input type="text" placeholder="Search Here......"/>

            </div>
        </>
    )
}

export default SearchBox;