import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loaderUser = useLoaderData();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)
    }
    return (
        <div>
            <h1>Update information of: {loaderUser.name}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" defaultValue={loaderUser?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loaderUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;