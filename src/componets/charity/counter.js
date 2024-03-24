"use client"
import React from 'react'



export default function Counter(){
    return(
        <div className="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
            <div className="counter-box text-center">

                <h5 className="counter-head text-xs font-semibold text-white">PEOPLE FACING FOOD INSECURITY</h5>
            </div>

            <div className="counter-box text-center">

                <h5 className="counter-head text-xs font-semibold text-white">PEOPLE WFP AIMS TO REACH IN 2022</h5>
            </div>

            <div className="counter-box text-center">

                <h5 className="counter-head text-xs font-semibold text-white">WFPS FUNDING NEEDS IN 2022</h5>
            </div>

            <div className="counter-box text-center">

                <h5 className="counter-head text-xs font-semibold text-white">MEALS DISTRIBUTED WORLDWIDE</h5>
            </div>
        </div>
    )
}