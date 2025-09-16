import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Page is Not Found</h1>
            <Link href="/" className="text-gray-500 hover:underline">
                Back to Home
            </Link>
        </div>)
}

export default NotFound