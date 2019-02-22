import faker from 'faker'

const pick = (...args: any[]) => args[Math.round(Math.random() * args.length)]

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
