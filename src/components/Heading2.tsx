import { ReactNode } from "react"


interface Heading2Props {
    children: ReactNode
}

const Heading2: React.FC<Heading2Props> = ({ children }) => {
    return (
        <h2 className="text-md text-gray-400">
            { children }
        </h2>
    )
}

export default Heading2;