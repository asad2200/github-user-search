import React from 'react';
import {Card, CardBody} from "reactstrap";

const UserCard = ({user}) => {
    return (
        <div className={"mt-3 mb-3 border border-info p-2"}>
            <Card className="text-center  ">
                <img src={user.avatar_url} className={"img-thumbnail"}/>
                <CardBody>
                    <div className="text-primary">{user.name}</div>
                    <div className="text-primary">{user.bio}</div>
                    <div className="text-primary">{user.location}</div>
                    <div className="text-primary">{user.email}</div>
                    <div className="text-secondary">Hire: {user.hireable ? "YES" : "NO"}</div>
                    <div className="text-secondary">Followers: {user.followers}</div>
                    <div className="text-secondary">Following: {user.following}</div>
                </CardBody>
            </Card>
        </div>
    );
};

export default UserCard;