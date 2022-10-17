import React from "react"

const Header = () => {

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5rem",
    }
    
    return (
        <header style={headerStyle}>
            <h1
               style={{
                 fontSize: "6rem",
                 fontWeight: "600",
                 marginBottom: "2rem",
                 lineHeight: "2rem",
                 color: "gold",
                 textTransform: "lowercase",
                 textAlign: "center",
               }}
            >
                Mytodos
            </h1>
        </header>
    )
}

export default Header 