import React from 'react'

export default function Loading() {
    return (
        <div>
            <video width="100%" height="100%"   autoPlay muted >
                <source src="./assets/icon_video.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}
