import React from 'react';
import { useState } from "react";
import { Button, Loader } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "../styles/landing.module.css";
import { notification, url } from "../notification";

export default function LandingPage() {
  const redirect = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deleteData, setDeleteData] = useState(false);

  const handleDelete = async()=>{
    setDeleteData(true);
    try {
      const deleteReq = await fetch(`${url}/user/delete`,{
        method:"DELETE"
      })
      const response = await deleteReq.json();
      notification("Data Deleted successfully", "", "white", "#66BB6A");
    } catch (error) {
      console.error(error.message);
      notification("Oops!", error.message, "white", "#EF5350")
    }
    setDeleteData(false);
  }

  const askDelete = async()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    })
    
  }

  const handleFetch = async()=>{
    setLoading(true);
    try {
      const usersReq = await fetch(`${url}/user/add`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        }
      })
      const users = await usersReq.json();
      users.ok ? notification("Fetch Successfull", "", "white", "#66BB6A") : notification("Oops!", users.message, "white", "#EF5350");
    } catch (error) {
      console.error(error.message);
      notification("Oops!", error.message, "white", "#EF5350")
    }
    setLoading(false)
  }
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Button className={styles.button} onClick={handleFetch} disabled={loading} color='indigo'>{ loading ? <Loader size="sm" /> : "Fetch Users" } </Button>
        <Button className={styles.button} color='indigo' onClick={askDelete} disabled={deleteData}>{ deleteData ? <Loader size="sm" /> : "Delete Users" }</Button>
        <Button className={styles.button} color='indigo' onClick={()=>redirect("/users")}>User Details</Button>
      </div>
    </div>
  )
}
