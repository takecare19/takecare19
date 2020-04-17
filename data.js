const resources = [
  {
    created_at: new Date(),
    location: { anywhere: true, specific: 'Toronto' },
    updated_at: new Date(),
    description:
      'A roundup of over 50 free resources that may be of help to you as a social worker, mental health worker, and/or a social health educator during the COVID-19 pandemic',
    published_at: new Date(),
    approved: true,
    url: 'https://materialdesignicons.com/',
    company: 'Social Workers of Canada',
    name: 'COVID-19 Resources for Social Workers and Therapists',
    tags: ['free', 'resources', 'front-line'],
    category: ' 3XPwVvmldDcEUUlfsrG2'
  },
  {
    created_at: new Date(),
    location: { anywhere: true, specific: 'Montreal' },
    updated_at: new Date(),
    description:
      'A 2-hour workshop for trans survivors of sexual violence is a form of trauma care through reconnecting to a sense of self-worth and empowerment at a time when the added stress of the pandemic is often overwhelming our current care and coping strategies',
    published_at: new Date(),
    approved: true,
    url: 'https://www.instagram.com/p/B-dI67lAARX/',
    company: 'Dandelion Initiative',
    name: 'Trans Care for Resiliency',
    tags: ['free', 'resources'],
    category: ' 3XPwVvmldDcEUUlfsrG2'
  }
]

const categories = [
  {
    id: 'ZNrUvRN4asfFk3FxpWh3',
    name: 'Crisis',
    order: 0
  },
  {
    id: 'All',
    name: 'All',
    order: 1
  },
  {
    id: '3JeIOXT7sy7KOWUgX9zk',
    order: 2,
    name: 'Informational/Articles'
  },
  {
    id: 'kaoFxEzS8aYrK6NSoEzw',
    name: 'Supporting Each Other & Community',
    order: 3
  },
  {
    id: 'w0gtsx4ckG8VyzL19GxH',
    order: 4,
    name: 'Mindfulness & Meditation'
  },
  {
    id: '9geEVgJVxwzZvv8FmTJ2',
    name: 'Being Active',
    order: 5
  },
  {
    id: 'C3dJG2UJz8H6KlCkghbQ',
    name: 'Staying Creative',
    order: 6
  },
  {
    id: 'GFK0Izjn1gX0tFrCcnNn',
    name: 'Online Learning',
    order: 7
  },
  {
    id: 'FEumLlCmAc5zQVAvBtdV',
    name: 'Social Services',
    order: 8
  },
  {
    id: 'ZeMEYmQsd8SKIQqAA7AL',
    name: 'Working Better',
    order: 9
  },
  {
    id: '8Ny050nF50gOoXxPgMbW',
    name: 'Resisting Hate',
    order: 10
  },
  {
    id: 'KOhg8XVTLsnwxqC3WWhb',
    name: 'Online Talk Therapy',
    order: 11
  },
  {
    id: 'O7sQvfvZUQ6mZqDafaFO',
    name: 'Local Therapy',
    order: 12
  },
  {
    id: 'QwUIN4g6euGuSoUI0Yeh',
    name: 'Misc',
    order: 13
  }
]

const locations = [
  {
    id: 'i6G7CdD6Z0wN1rE1jadn',
    name: 'Anywhere',
    order: 1
  },
  {
    id: 'CaDm5zWm82h7eLIXgXye',
    order: 5,
    name: 'Canada'
  },
  {
    id: '0GHEIYUBtuxmLlOzHLd4',
    name: 'Ontario',
    order: 20
  },
  {
    id: 'PdFkW2NseEATQzCL8jZM',
    name: 'Ottawa, ON',
    order: 30
  },
  {
    id: 'P7cn4TqZEBzH7tV5c8FL',
    order: 40,
    name: 'Toronto, ON'
  },
  {
    id: 'tMim2vVCU0ZVRkXAiVKf',
    order: 50,
    name: 'Vancouver, BC'
  },
  {
    id: 'gPaj0FpaOjbAaU8wQEfR',
    order: 100,
    name: 'United States'
  },
  {
    id: 'y8jOgKjU0CB5RQWtdgxG',
    name: 'International',
    order: 500
  }
]

module.exports = { categories, resources, locations }
