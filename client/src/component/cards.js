import React from 'react'

function cards() {
    return (
        <React.Fragment>
            <div className="bg-dark p-3">
            <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                <div className="ml-6 pt-1">
                    Keyur Italiya
                </div>
            </div>
            </div>
            <div className="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 ">
                <p className="ml-64">
                    Hello
                </p>
            </div>
            <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
                Button
            </button>

        </React.Fragment>
    )
}

export default cards
