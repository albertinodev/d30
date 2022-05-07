import { ReactNode } from "react"


interface Heading1Props {
    children: ReactNode
}

const Heading1: React.FC<Heading1Props> = ({ children }) => {
    return (
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            { children }
        </h1>
    )
}

export default Heading1;