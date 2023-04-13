import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './UserItem.module.css';
const UserItem = (props) => {
    const [isVisible, setVisible] = useState(false);

    function showHandler() {
        setVisible(!isVisible)
    }

    function deleteHandler() {
        props.deleteHandler(props.id)
    }

    return (
        <>
            <div className={classes.item}>

                <div className={classes.child}>
                    <h1>Name:{props.name}</h1>
                    <p>Username:{props.userName}</p>
                    <button onClick={showHandler}>show/hide</button>
                    <button onClick={deleteHandler}>delete</button>
                    <NavLink to={`/form/${props.id}`}>update</NavLink>


                    {
                        isVisible && <div><p>id:{props.id}</p>
                            <p>gmail:{props.gmail}</p></div>
                    }

                </div>
            </div>
        </>
    )
}
export default UserItem;