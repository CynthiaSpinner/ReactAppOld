// imports react and required components
import React from 'react';
import TopNav from "../topnav/topnav.component";
import { Container } from "react-bootstrap";

// main layout component that wraps all pages with navigation and container
function MainLayout({ className, children }) {
    return (
        <div className={className}>
            {/* renders top navigation bar */}
            <TopNav />
            {/* wraps page content in bootstrap container */}
            <Container>
                {/* adds margin spacing around page content */}
                <div className="my-4">{children}</div>
            </Container>
        </div>
    );
}

export default MainLayout;