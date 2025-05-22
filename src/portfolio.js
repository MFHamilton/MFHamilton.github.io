const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MFHamilton/MFHamilton.github.io',
  title: 'MH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'María Hamilton',
  role: 'Software Engineer student',
  description:
    'Software Engineering student with a focus on web development, databases, and UX/UI design. Known for analytical thinking, problem-solving skills, and strong mathematical knowledge. Committed to continuous improvement and teamwork.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PharmaTech',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['MSSQL', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Azure DevOps',
  'Scrum',
  'Material UI',
  'Git',
  'Agile',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mariahamiltonr1@gmail.com',
}

export { header, about, projects, skills, contact }
