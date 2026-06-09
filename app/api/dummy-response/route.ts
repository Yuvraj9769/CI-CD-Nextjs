import { NextResponse } from "next/server"

export function GET(){

    try{

        const dummyResponse = [
            {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com"
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "janesmith@gmail.com"
            },
             {
                id: 3,
                name: "Alice Johnson",
                email: "alice.johnson@example.com"
             },
             {
                id: 4,
                name: "Bob Brown",
                email: "bob.brown@example.com"
             },
             {
                id: 5,
                name: "Charlie Davis",
                email: "charlie.davis@example.com"
             }
        ]

        return NextResponse.json({
            status: 200,
            message: "Dummy data fetched successfully.",
            data: dummyResponse,
            success: true
        },
    {
        status: 200
    })


    } catch (error) {

        return NextResponse.json({
            status: 500,
            message: "An error occurred while fetching dummy data.",
            error: error instanceof Error ? error.message : "Unknown error",
            success: false
        }, {
            status: 500
        })
    }

}