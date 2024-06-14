import React, { useState } from "react";

function withLoader(WrappedComponent) {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1200);


        return (
            <div>
                {isLoading ? <p>Loading...</p> : <WrappedComponent />}
            </div>
        )
    }
}

export default withLoader;