export type Grade = {
    id: number,
    name: string
}
export type System = {
    shortName: string
    fullName: string
    grades: Grade[]
}

const YosemiteDecimalSystem: Grade[] = [
    {
        id: 1,
        name: '5.0'
    },
    {
        id: 2,
        name: '5.1'
    },
    {
        id: 3,
        name: '5.2'
    },
    {
        id: 4,
        name: '5.3'
    },
    {
        id: 5,
        name: '5.4'
    },
    {
        id: 6,
        name: '5.5'
    },
    {
        id: 7,
        name: '5.6'
    },
    {
        id: 8,
        name: '5.7'
    },
    {
        id: 9,
        name: '5.8'
    },
    {
        id: 10,
        name: '5.9'
    },
    {
        id: 11,
        name: '5.10a'
    },
    {
        id: 12,
        name: '5.10b'
    },
    {
        id: 13,
        name: '5.10c'
    },
    {
        id: 14,
        name: '5.10d'
    },
    {
        id: 15,
        name: '5.11a'
    },
    {
        id: 16,
        name: '5.11b'
    },
    {
        id: 17,
        name: '5.11c'
    },
    {
        id: 18,
        name: '5.11d'
    },
]

const French: Grade[] = [
    {
        id: 2,
        name: '2'
    },
    {
        id: 4,
        name: '3'
    },
    {
        id: 5,
        name: '4a'
    },
    {
        id: 6,
        name: '4b'
    },
    {
        id: 7,
        name: '4c'
    },
    {
        id: 8,
        name: '5a'
    },
    {
        id: 9,
        name: '5b'
    },
    {
        id: 10,
        name: '5c'
    },
    {
        id: 11,
        name: '6a'
    },
    {
        id: 12,
        name: '6a+'
    },
    {
        id: 13,
        name: '6b'
    },
    {
        id: 14,
        name: '6b+'
    },
    {
        id: 16,
        name: '6c'
    },
    {
        id: 17,
        name: '6c+'
    },
    {
        id: 18,
        name: '7a'
    },
]

export function getSystems() {
    const systems: System[] = [
        {
            shortName: 'yds',
            fullName: 'Yosemite Decimal System',
            grades: YosemiteDecimalSystem
        },
        {
            shortName: 'french',
            fullName: 'French',
            grades: French
        },
    ]

    return systems
}
