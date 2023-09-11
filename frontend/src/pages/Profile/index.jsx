import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (isLoading) {
        return <div>Collecting ...</div>;
    }

    return (
        isAuthenticated && (
            <div class="flex items-center flex-col">
                <img class="w-20 rounded-full shadow-2xl border-4 border-yellow-500" src={user.picture} alt={""} />
                <h2 class="text-blue-600">{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;