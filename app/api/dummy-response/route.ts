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
             },
             {
                id: 6,
                name: "Eve Wilson",
                email: "eve.wilson@example.com"
             },
                {
                id: 7,
                name: "Frank Miller",
                email: "frank.miller@example.com"
             },
                {
                id: 8,
                name: "Grace Lee",
                email: "grace.lee@example.com"
             },
             {
                id: 9,
                name: "Hank Green",
                email: "hank.green@example.com"
             },
             {
                id: 10,
                name: "Ivy Turner",
                email: "ivy.turner@example.com"
             },
             {
                id: 11,
                name: "Jack White",
                email: "jack.white@example.com"
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