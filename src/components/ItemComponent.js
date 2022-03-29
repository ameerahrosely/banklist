import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemComponent = () => {
    const items = useSelector((state) => state.allItems.items);
    const renderList = items.map((item, index) => {
        const {id, name, genre, releaseDates } = item;
        return (
            <tr key={id}> 
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{genre}</td>
                <td>{releaseDates.Europe}</td>
                <td>
                    <Link to={`/item/${id}`}>
                        <i className="fas fa-info-circle text-warning"></i>
                    </Link>
                </td>
            </tr>
        );
    })
    return <>{renderList}</>;
}

export default ItemComponent;