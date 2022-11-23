import { FC } from "react"

const icons = [
    'site-logo'
] as const

export type IconType = typeof icons[number]

type IconProps = {
    name: IconType,
    width?: number
    height?: number
    className?: string
}

export const Icon: FC<IconProps> = ({
    name,
    height = 14,
    width = 14,
    className = ''
}) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
        >
            <use data-testid="svg-use-element" href={`/icons.svg#${name}`} />
        </svg>
    )
}