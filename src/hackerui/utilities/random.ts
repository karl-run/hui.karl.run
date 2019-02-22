import faker from 'faker'

export const pick = <T>(...args: T[]): T => args[Math.round(Math.random() * args.length)]

export const modSlice = <T>(values: T[], offset: number): T[] => [
  ...values.slice(offset % values.length),
  ...values.slice(0, offset % values.length),
]

const getFakerItem = () =>
  pick(faker.hacker.noun(), faker.hacker.verb(), faker.hacker.adjective(), faker.hacker.abbreviation())

export const buildGibber = (lines = 10, maxWordsPerLine = 8, minWords = 3): string[] =>
  Array(lines)
    .fill('')
    .map(() =>
      Array(Math.round(minWords + Math.random() * (maxWordsPerLine - minWords)))
        .fill('')
        .map(getFakerItem)
        .join(' '),
    )
