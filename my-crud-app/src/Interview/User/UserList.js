import UserItem from "./UserItem";
import classes from './UserItem.module.css';
import { useState,useEffect } from "react";
import UserData from "../../store/UserData-slice";
import { userActions } from "../../store/UserData-slice";
import { useSelector ,useDispatch} from 'react-redux';
const arr1=[{}]
const UserList=()=>{
    const items=useSelector((state)=>state.user.items)
    const [userData,setData]=useState([]);
    const dispatch=useDispatch();
    
useEffect( ()=>{
   const fetcData=async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const result =await response.json();
    const dataArr=[];
    for(let val of result){
    const newObj={
        name:val.name,
        userName:val.username,
        id:val.id,
        gmail:val.email

    }
    dataArr.push(newObj);
    
    }
   dispatch(userActions.replaceItems({items:dataArr}));

   }
   fetcData();
},[dispatch])
   

const fetchHandler=()=>{

}
  

    const deleteHandler=(id)=>{
dispatch(userActions.deleteItems({id:id}))
    }

    
    return (
        <>
        <div className={classes.main}>
        <button onClick={fetchHandler}>Fetch data</button>
        {
            items.map((val)=>{
                return <UserItem deleteHandler={deleteHandler}
                 key={val.id} id={val.id} name={val.name} userName={val.userName} gmail={val.gmail} />
            })
        }
        </div>
        </>
    )
}
export default UserList;