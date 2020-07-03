import React from 'react'

function Course(props) {

    const courseTitle = props.match.params.title

    return (
        <div className='container-fluid pt-5'>
            <h4>Fetching {courseTitle}...</h4>
        </div>
    )
}

export default Course
