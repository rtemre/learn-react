"use client"; // Velotio Technology - Coding question

import { useEffect, useState } from 'react'


interface DataType {
    postId: number,
    id: number,
    name: string
    email: string
    body: string
}

const LIMIT = 10;

function Pagination() {

    const [data, setData] = useState([])
    const [start, setStart] = useState(0)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=10`)
            if (response) {
                const result = await response.json()
                setData(result)
            }
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchData()
    }, [start])

    const handleNextClick = () => {
        setStart(prev => prev + LIMIT)
    }

    const handlePrevClick = () => {
        setStart(prev => prev - LIMIT)
    }

    return (
        <div>
            <div>Table</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Post ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data.map((val: DataType) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.postId}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button disabled={start === 0} onClick={handlePrevClick}>Previous</button>
                <button disabled={start === 50} onClick={handleNextClick}>Next</button>
            </div>
        </div>
    )
}

export default Pagination
