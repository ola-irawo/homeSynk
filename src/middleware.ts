import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
    // if(request.url !== "/"){
    //     console.log("not the intended url", NextResponse.next(), NextResponse)
    //     console.log("not reso", NextResponse)
    //     return NextResponse.redirect(new URL("/"))
    // }

    return NextResponse.next();
}