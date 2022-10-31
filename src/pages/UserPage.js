import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//useDispatch是要改變某個state時用到的,而useSelector是想要拿到某個資料時使用的
import { addUser, deleteUser, updateUserName } from '../store/userSlice';
//這個addUser的"動作"是我們想要"dispatch"出去的

function UserPage(){
    const userList = useSelector((state)=>state.users.value)
    //這邊的userList跟movieList使用到的state，等於是index中configuresotre的reducer，所以可以選要哪一個
    //選好後，會使用userSlice跟movieSlice的資料
    const [userName, setUserName] = useState("")
    const [newUserName, setNewUserName] = useState("")
    const [age, setAge] = useState(0)
    const dispatch = useDispatch()
    //這裡是去看configureStore那邊的值，我們要取用reducer裡面的users，所以後面就會是寫state.users
    //接著再去User.js看userSlice裡面的值
  
    // useEffect(()=>{
    //   fetch("https://cors-anywhere.herokuapp.com/https://cafenomad.tw/api/v1.2/cafes/taichung")
    //   .then((res)=>res.json())
    //   .then((response)=> console.log(response))
    // },[])
    
    return(
    <div className='user-page'>
    <div className='addUser'>
        <input type="text" placeholder="userName..." onChange={(e) => setUserName(e.target.value)} />
        <input type="text" placeholder="age..." onChange={(e) => setAge(e.target.value)} />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, age: age, username: userName })) } }>add user</button>
    </div>
    <div className='displayUsers' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {userList.map((user) => (
            <div className='userbox' key={user.username + user.age}>
                <div className='userInfo'>
                    <span>{user.id}</span>
                    <span>{user.username}</span>
                    <span>{user.age}</span>
                </div>
                <div className='changeInput'>
                    <input type="text" placeholder="changeUserName..." onChange={(e) => setNewUserName(e.target.value)} />
                    <button onClick={() => dispatch(updateUserName({ id: user.id, username: newUserName }))}>change user name</button>
                    <button onClick={() => dispatch(deleteUser({ id: user.id }))}>delete user</button>
                </div>
            </div>
        ))}
    </div>
    </div>
    )
}

export default UserPage