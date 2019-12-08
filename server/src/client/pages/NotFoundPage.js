import React from 'react'

const NotFoundPage = ({staticContext={}}) => {
    //static router renames context for errors to staticContext exists only in static browser
    //create property notFound in staticContext
    staticContext.notFound=true;
    return (
        <h1>
            Page not found
        </h1>
    )
}

export default {component:NotFoundPage}
