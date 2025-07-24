import { use, useEffect } from "react";

export const Dashboard = () => {
    const role = JSON.parse(localStorage.getItem('role'));
    useEffect(() => {
        if(!role) {
            alert("You are not logged in or do not have permission to access this page.");
        }
    }, [role]);

    return (
        <div>
            {
                role === "admin" ? (
                    <div className="text-center text-3xl font-bold underline">
                        <h2>Welcome to the Admin Dashboard</h2>
                    </div>
                ) : (
                    <div className="text-center text-3xl font-bold underline">
                        <h2>Welcome to the User Dashboard</h2>
                    </div>
                )
            }
        </div>
    );

}