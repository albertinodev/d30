import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

const LayoutPublic: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
        Public Layout
        </>
    )
} 


export default LayoutPublic;