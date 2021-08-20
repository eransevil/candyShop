import React from 'react'
import { useEffect, useState } from 'react'

export default function Admin() {

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/api/'
        : '//localhost:3030/api/'



    const [logs, setLogs] = useState(null)
    useEffect(() => {
        const getLogs = async () => {
            const logsFromServer = await fetchLogs();
            setLogs(logsFromServer);
        }
        getLogs();
    }, [])

    const fetchLogs = async () => {
        const res = await fetch(`${BASE_URL}log`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <h1> LOGS</h1>
            <div className="logs-container">
            {logs && logs.map((log, idx) => {
                return <div key={idx}> {idx!==logs.length-1? idx+1 :''} {log} </div>
            })}
             </div>
        </div>
    )
}
