import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

const LayoutTenant: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
        Tenant Layout
        </>
    )
} 


export default LayoutTenant;