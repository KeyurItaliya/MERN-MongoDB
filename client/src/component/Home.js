import React from 'react'
import Card from './cards';

function Home() {
    console.log("before")
    getUser(1, (user) => {
        getRepositories(user, (repo) => {
            console.log("Reposi --->", repo)
        })
    })
    console.log("After")
    function getUser(id, callback){
        setTimeout(() => {
            console.log("Reading a user from a database...")
            callback({ id: id, gitHubUsername: 'mos' })
        }, 2000)
    }
    function getRepositories(user, callback){
        setTimeout(() => {
            console.log("git hub api calling...")
            console.log("user reposiories", user)
            callback([1, 2, 3])
        }, 2000)
    }
    return (
        <div>
            <Card />
        </div>
    )
}

export default Home
