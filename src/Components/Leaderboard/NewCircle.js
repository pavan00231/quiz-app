import React from 'react'

const NewCircle = () => {
    return (
        <div class="progress" style={{maxWidth: "60%"}}>
            <div class="progress-bar"
                style={{ width: "80%", backgroundColor: "green" }}>
            </div>
            <div class="progress-bar progress-bar-stripped"
                style={{ width: "80%", backgroundColor: "#66b400" }}>
            </div>
            <div class="progress-bar progress-bar-stripped"
                style={{ width: "70%", backgroundColor: "rgb(141, 3, 72)" }}>
            </div>
        </div>
    )
}

export default NewCircle