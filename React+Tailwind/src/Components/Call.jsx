import React from 'react';



const Call=()=>{
    return(
        <div className="h-[400px] w-[screen] bg-white flex justify-center items-center">
            <div className="h-[150px] w-[800px] bg-blue-500 rounded-lg flex justify-between items-center px-9 py-5">
                <div className="text-white">
                    <h2>Call to Action!It's Time!</h2>
                    <p>Sign up for our productivity by clicking up the button right there!</p>
                </div>
                <div className="h-[40px] w-[100px] bg-transparent border-[3px] border-solid border-white rounded-lg text-white flex justify-center">
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Call;