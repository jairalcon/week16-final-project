import React from 'react';


export default function SubmitResults({ APIData, onSubmit, username, handleChange}) {
    
    console.log('APIData from Quiz', APIData);

    return (
        <>
            <div className='container row d-flex aligns-items-center justify-content-center'>
                <div className='mt-3 text-center'>
                    <h3 className='font-face-f1b'>Enter Your Username Below</h3>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3 col-sm font-face-f1r'>
                            <label className='form-label'></label>
                            <input
                                placeholder='Username...'
                                value={username}
                                className='form-control'
                                onChange={handleChange} />
                        </div>
                        <>
                            <button 
                                className='btn btn-success font-face-f1r' 
                                type='submit'>Submit
                            </button>
                        </>
                    </form>
                </div>
            </div>
        </>
    )
}