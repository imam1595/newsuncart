'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const UpdateProfile = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
            
        const name = e.target.name.value;
        const url = e.target.url.value;
        
        
        // console.log({url,name});

        await authClient.updateUser({
            name,
            image :url
        })

    }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Update profile</button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form onSubmit={onSubmit}>
                {/* if there is a button in form, it will close the modal */}


                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name="name"  />

                    <br />

                    <label className="label">Image url</label>
                    <input type="url" className="input" placeholder="url" name="url" />

                    <button type='submit' className='btn'>Update</button>

                </form>
                
            </div>
            </dialog>
        </div>
    );
};

export default UpdateProfile;