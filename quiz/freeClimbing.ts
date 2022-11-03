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
    {
        id: 19,
        name: '5.12a'
    },
    {
        id: 20,
        name: '5.12b'
    },
    {
        id: 21,
        name: '5.12c'
    },
    {
        id: 22,
        name: '5.12d'
    },
    {
        id: 23,
        name: '5.13a'
    },
    {
        id: 24,
        name: '5.13b'
    },
    {
        id: 25,
        name: '5.13c'
    },
    {
        id: 26,
        name: '5.13d'
    },
    {
        id: 27,
        name: '5.14a'
    },
    {
        id: 28,
        name: '5.14b'
    },
    {
        id: 29,
        name: '5.14c'
    },
    {
        id: 30,
        name: '5.14d'
    },
    {
        id: 31,
        name: '5.15a'
    },
    {
        id: 32,
        name: '5.15b'
    },
    {
        id: 33,
        name: '5.15c'
    },
    {
        id: 34,
        name: '5.15d'
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
    {
        id: 19,
        name: '7a+'
    },
    {
        id: 20,
        name: '7b'
    },
    {
        id: 21,
        name: '7b+'
    },
    {
        id: 22,
        name: '7c'
    },
    {
        id: 23,
        name: '7c+'
    },
    {
        id: 24,
        name: '8a'
    },
    {
        id: 25,
        name: '8a+'
    },
    {
        id: 26,
        name: '8b'
    },
    {
        id: 27,
        name: '8b+'
    },
    {
        id: 28,
        name: '8c'
    },
    {
        id: 29,
        name: '8c+'
    },
    {
        id: 30,
        name: '9a'
    },
    {
        id: 31,
        name: '9a+'
    },
    {
        id: 32,
        name: '9b'
    },
    {
        id: 33,
        name: '9b+'
    },
    {
        id: 34,
        name: '9c'
    },
]

const UIAA: Grade[] = [
    {
        id: 2,
        name: 'II'
    },
    {
        id: 4,
        name: 'III'
    },
    {
        id: 5,
        name: 'IV'
    },
    {
        id: 6,
        name: 'IV+/V-'
    },
    {
        id: 7,
        name: 'V'
    },
    {
        id: 8,
        name: 'V+'
    },
    {
        id: 9,
        name: 'VI-'
    },
    {
        id: 10,
        name: 'VI'
    },
    {
        id: 11,
        name: 'VI+'
    },
    {
        id: 12,
        name: 'VII-'
    },
    {
        id: 13,
        name: 'VII'
    },
    {
        id: 14,
        name: 'VII+'
    },
    {
        id: 16,
        name: 'VIII-'
    },
    {
        id: 17,
        name: 'VIII-'
    },
    {
        id: 18,
        name: 'VIII'
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
        {
            shortName: 'uiaa',
            fullName: 'UIAA',
            grades: UIAA
        },
    ]

    return systems
}
