import React from 'react'
import {  Download } from 'lucide-react';

const SvgButton = ({children}) => {
    return (
        <div><button className='relative px-6 py-3 text-white font-semibold border-2 border-white rounded-lg overflow-hidden group'>
            {/* Animated SVG border */}
            <svg
                className='absolute inset-0 w-full h-full'
                viewBox='0 0 180 50'
                preserveAspectRatio='none'
            >
                <rect
                    x='0' y='0' width='180' height='50'
                    className='stroke-current stroke-[2] fill-transparent'
                    style={{
                        strokeDasharray: 520,
                        strokeDashoffset: 520,
                        transition: 'stroke-dashoffset 0.6s ease-in-out',
                    }}
                />
            </svg>
            <span className='relative z-10 flex items-center gap-2 group-hover:text-primary transition'>{children} </span>
        </button></div>
    )
}

export default SvgButton