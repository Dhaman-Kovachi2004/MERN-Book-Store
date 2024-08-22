import React,{useState,useEffect} from 'react'
import { Spinner } from '../components/Spinner';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export const DeleteBook = () => {
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const {enqueueSnackbar}=useSnackbar();

  const handleDeleteBok =()=>{
    setLoading(true);
    axios.delete(`https://mern-book-store-backend-nrpm.onrender.com/books/${id}`)
    .then((response)=>{
      setLoading(false);
      enqueueSnackbar("Book Deleted Successfully",{variant:'success'})
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      enqueueSnackbar("Error",{variant:'error'})
      console.log(error);
    })
  }

  return (
    <div className='p-4 justify-center align-middle'>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading?<Spinner /> : ""}
      <div className='flex flex-col items-center border-2 border-sky-blue-600 rounded-xl w-[600px] p-8 margin-auto '>
        <h3>Are You Sure You Want To Delete It?</h3>
        <button className='bg-red-600 p-4 m-8 text-white justify-center' onClick={handleDeleteBok}>Yes,Delete It</button>
      </div>
    </div>
  )
}
