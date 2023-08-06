import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/users.module.css";
import { Loader, Table, Group, Pagination, Select, TextInput } from '@mantine/core';
import { notification, url } from "../notification";

const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func(...args), delay);
    };
};

export default function UserTable() {
    const redirect = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(0);
    const [value, setValue] = useState('');
    const [searchValue, onSearchChange] = useState("name");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`${url}/user/get?page=${currentPage}`).then((raw) => raw.json()).then((parsed) => {
            setLoading(false);
            setData(parsed.data);
            setPages(parsed.totalCount);
        }).catch((error) => notification("Oops!", error.message, "white", "#EF5350"))

    }, [currentPage])

    async function search(searchBy, value) {
        setLoading(true);
        if(!value){
            fetch(`${url}/user/get?page=1`).then((raw) => raw.json()).then((parsed) => {
                setLoading(false);
                setData(parsed.data);
                setPages(parsed.totalCount);
            }).catch((error) => notification("Oops!", error.message, "white", "#EF5350"))
            return;
        }
        searchBy = searchBy.toLowerCase();
        const req = await fetch(`${url}/user/get/filter?searchby=${searchBy}&search=${value}`)
        const res = await req.json();
        setLoading(false);
        setData(res.data);
        setPages(res.totalCount);
    }

    const debouncedSearchRef = useRef(debounce(search, 1500));

    const handleSearch = (event) => {
        setValue(event.currentTarget.value);
        debouncedSearchRef.current(searchValue, event.currentTarget.value);
    };


    return (
        <div className={styles.body}>
            <h3 className={styles.back} onClick={() => redirect("/")}>{"< Go Back"}</h3>
            <h1 className={styles.heading}>User Details</h1>

            <Group spacing="xs" className={styles.filter}>
                <Select
                    label="Search by:"
                    placeholder="Pick one"
                    onSearchChange={onSearchChange}
                    searchValue={searchValue}
                    withAsterisk
                    defaultValue={searchValue}
                    data={[
                        { value: 'name', label: 'Name' },
                        { value: 'email', label: 'Email' },
                        { value: 'username', label: 'Username' },
                        { value: 'phone', label: 'Phone' },
                        { value: 'age', label: 'Age' },
                        { value: 'address', label: 'Address' },
                    ]}
                />
                <TextInput value={value} className={styles.search} placeholder={`Search by ${searchValue}`} onChange={handleSearch} />
            </Group>

            <Table striped highlightOnHover withBorder className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="8" className={styles.loader}>
                                <Loader />
                            </td>
                        </tr>
                    ) : !data.length ? (
                        <tr>
                            <td colSpan="8" className={styles.loader}>
                                <h4>No Data Available...</h4>
                            </td>
                        </tr>
                    ) :

                        data?.map((element, i) => (
                            <tr key={i}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.username}</td>
                                <td>{element.phone}</td>
                                <td>{element.age}</td>
                                <td>{element.gender}</td>
                                <td>{element.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Group position="center" spacing="xs" className={styles.pages}>
                {
                    data.length ? (
                        <>
                            <Pagination value={currentPage} onChange={setCurrentPage} total={pages} />
                        </>

                    ) : ""
                }
            </Group>
        </div>
    )
}
