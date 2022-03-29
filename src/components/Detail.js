import React, { useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { removeSelectedItems, selectedItems } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
    let item = useSelector((state) => state.items);
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const {name, genre, developers, publishers, releaseDates} = item;
   
    const fetchItemDetail = async (id) => {
        const response = await axios
        .get(`https://api.sampleapis.com/xbox/games/${id}`)
        .catch((error) => {
            alert("Error: Couldn't retrieve detail - ", error);
        });
        dispatch(selectedItems(response.data));
    }

    useEffect(() => {
        if(itemId && itemId !== "") fetchItemDetail(itemId);
        return () => {
            dispatch(removeSelectedItems());
        }
    }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="row no-gutters">
            {Object.keys(item).length === 0 ? (
                <div>...Loading <i class="fas fa-spinner fa-spin"></i></div>
            ) : ( 
            <div className="col-md-12">
                <div className="summary">
                    <h3>Transaction Details</h3>
                    <h4><span className="text">Name</span><span className="price">{name}</span></h4>
                    <h4><span className="text">Genre</span><span className="price">{genre}</span></h4>
                    <h4><span className="text">Developers</span><span className="price">{developers}</span></h4>
                    <h4><span className="text">Publishers</span><span className="price">{publishers}</span></h4>
                    <h4>
                        <span className="text">Release Dates</span>
                        <span className="price"></span>
                    </h4>
                    <h4><span className="text">Japan:</span><span className="price">{releaseDates.Japan}</span></h4>
                    <h4><span className="text">North America:</span><span className="price">{releaseDates.NorthAmerica}</span></h4>
                    <h4><span className="text">Europe:</span><span className="price">{releaseDates.Europe}</span></h4>
                    <h4><span className="text">Australia:</span><span className="price">{releaseDates.Australia}</span></h4>

                    <Link to={'/'}>
                        <button className="btn btn-primary btn-block btn-lg" type="button">Back</button>
                    </Link>
                </div>
            </div>
            )}
        </div>
    );
}

export default Detail;