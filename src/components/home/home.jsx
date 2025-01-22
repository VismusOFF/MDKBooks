import React from "react";
import { useAuth } from "../../context";
import AdminTable from "../table/table";
import RequestForm from "../request/request";
import "./home.css"

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div>
            Доброго времени суток {currentUser.displayName ? currentUser.displayName : currentUser.email}, вы вошли в аккаунт.
            <div className="container2">
                <RequestForm/>
                
            </div>
        </div>
    )
}

export default Home