import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import GalleryItem from "./GalleryItem";

export default function Gallery () {

    const data = useContext(DataContext);

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={`galleryItem-${index}`} />
        )
    });

    return (
        <div>
            {display}
        </div>
    )
}