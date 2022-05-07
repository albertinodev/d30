import { ReactNode } from "react"


interface Heading1Props {
    children: ReactNode
}

const Heading1: React.FC<Heading1Props> = ({ children }) => {
    return (
        <h2 className="text-md text-gray-400">
            { children }
        </h2>
    )
}

export default Heading1;