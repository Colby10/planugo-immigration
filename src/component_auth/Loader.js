import React from "react"

export const Loader = ({ size = 10 }) => {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        spinner: {
            height: size,
            width: size
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.spinner} className={"spinner"}></div>
        </div>
    )
}