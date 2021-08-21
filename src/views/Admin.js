import React from 'react'
import { useEffect, useState } from 'react'

export default function Admin() {
    const [logs, setLogs] = useState(null)
    const [filter, setFilter] = useState({ term: '' })
    const [logsForDisply, setLogsForDisply] = useState(logs)



    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/api/'
        : '//localhost:3030/api/'

    const handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        setFilter({ term: value })
    }

    useEffect(() => {
        const getLogs = async () => {
            const logsFromServer = await fetchLogs();
            setLogs(logsFromServer);
        }
        getLogs();
    }, [])

    useEffect(() => {
        if(!logs) return
        const tempLogs = logs.filter(log => log.toLowerCase().includes(filter.term.toLowerCase()))
        setLogsForDisply(tempLogs)
    }, [filter])


    const fetchLogs = async () => {
        const res = await fetch(`${BASE_URL}log`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <h1 className="logs-title"> LOGS</h1>
            <input className="search" placeholder="Search by key word" type="Search" id="Search" name="Search" value={filter.term} onChange={handleChange} />
            <div className="logs-container">
                {logsForDisply && logsForDisply.map((log, idx) => {
                    return <div key={idx}> {idx !== logs.length - 1 ? idx + 1 +')': ''} {log} </div>
                })}
            </div>
        </div>
    )
}
