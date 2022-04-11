import React, { useState } from "react";

export default function SearchBar (props) {
    return (
        <form>
            <input type='text' placeholder='Enter a search term here'
                onChange={(e) => props.handleSearch(e, e.target.value)} />
        </form>
    )
}