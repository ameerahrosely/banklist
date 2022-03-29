import React, { useEffect } from 'react';
import axios from 'axios';
import ItemComponent from './ItemComponent';
import { setItems } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Masterlist = () => {
    const dispatch = useDispatch();

    const fetchItems = async () => {
        const response = await axios
        .get("https://api.sampleapis.com/xbox/games")
        .catch((error) => {
            alert("Error: Couldn't retrieve API - ", error);
        });
        dispatch(setItems(response.data));
    }

    useEffect(() => {
        fetchItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <table className='table table-hover'>
            <thead className='thead-dark'>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='table-striped'>
                <ItemComponent/>
            </tbody>
        </table>
    );
}

export default Masterlist;