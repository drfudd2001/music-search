import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AlbumView() {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([]);

    return (
        <div>
            <h1>{id}</h1>
            <p>Album Data here</p>
        </div>
    );
}