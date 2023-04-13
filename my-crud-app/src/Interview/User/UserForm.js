
import { useParams } from "react-router-dom";

import { useState } from "react";
import classes from './UserItem.module.css';
import { useSelector } from "react-redux";

const UserForm = (props) => {
    const [isupdate, setUpdate] = useState(false);
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('')
   
    const params=useParams();

const id =params.userId;
const items=useSelector((state)=>state.user.items);
const existingItem=items.find((item)=>{
    return item.id===id;
});


// setName(existingItem.name);
// setUserName(existingItem.userName)
   
    return (
        <>
            <form className={classes.form} >
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} />

                </div>
                <div>
                    <label htmlFor="userName">UserName:</label>
                    <input id="userName" value={userName} />
                </div>

                <button>submit</button>

            </form>
            <p>{existingItem.userName}</p>
            <p>{}</p>
           
        </>
    )
}
export default UserForm;