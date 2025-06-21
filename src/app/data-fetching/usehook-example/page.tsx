import { Suspense } from "react";

interface user {
    id : number,
    firstName : string,
    lastname : string
}

interface userResponse {
    users : user[];
}

function getUsers() : Promise<userResponse> {
    return fetch("https://dummyjson.com/users").then(res => res.json()).catch(err => console.log(err));
}

const page = () => {

    const usersPromise = getUsers();


  return (
    <div>
        <h1>Use hook example</h1>
        <Suspense
            fallback = {
                <div>Loading...</div>
            }
        >
            <userList/>
        </Suspense>
    </div>
  )
}

function userList(){

}

export default page
