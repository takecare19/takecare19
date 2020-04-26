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

const tags = [
  {
    id: '31VNAUBBeFMszklb2Y82',
    name: 'work',
    type: 'topic',
    order: 3130
  },
  {
    id: '3WlPX9jO24Ly5gO0U9wL',
    name: 'course/training',
    type: 'format',
    order: 2080
  },
  {
    id: '3sOx5yzbFwmqn9fMnhDM',
    type: 'format',
    order: 2230,
    name: 'website'
  },
  {
    id: '3vvXF1rzaWnP6IExYgHW',
    name: 'iOS',
    type: 'format',
    order: '2110'
  },
  {
    id: '4HPqwuhi7eMlyce9yyVG',
    type: 'cost',
    order: 1040,
    name: 'pay-what-you-can'
  },
  {
    id: '4LYArt8vhwLIYKeeVTKA',
    name: 'employers',
    type: 'audience',
    order: 4040
  },
  {
    id: '5AE9XYC5gt1XzYxbm3pl',
    name: 'seniors',
    type: 'audience',
    order: 4100
  },
  {
    id: '7mEydI2tZDums7nEUVx3',
    type: 'audience',
    order: 4050,
    name: 'front-line workers'
  },
  {
    id: '7zMvDTWd79Kvnllpr0w8',
    type: 'format',
    order: 2010,
    name: 'android'
  },
  {
    id: '9SVZ7IMNBvMKXReIxJei',
    name: 'platform',
    type: 'format',
    order: 2160
  },
  {
    id: '9jgzWVwGICwdQwlsls45',
    name: 'bereavement',
    type: 'topic',
    order: 3030
  },
  {
    id: 'BG08VoS0hTmitycbRLhh',
    name: 'youth',
    type: 'audience',
    order: 4130
  },
  {
    id: 'BLN5h9BHIKIpEd1U1G17',
    name: 'reduced cost',
    type: 'cost',
    order: 1050
  },
  {
    id: 'CCr3szDilmyAbA2fLFNw',
    name: 'community',
    type: 'format',
    order: 2070
  },
  {
    id: 'CfKIjfwhhYViJOjCEk1N',
    type: 'format',
    order: 2120,
    name: 'live'
  },
  {
    id: 'DIieZ3TO9Az8mEOMz4ub',
    name: 'kids',
    type: 'audience',
    order: 4060
  },
  {
    id: 'F354dwlCiCjV5ZI2dW1H',
    name: 'in quarantine',
    type: 'audience',
    order: 4090
  },
  {
    id: 'H43wxIMTTwpmlLgTZkig',
    name: 'service',
    type: 'format',
    order: 2180
  },
  {
    id: 'HhMtAlQZNqxbwhw9OXQH',
    name: 'support',
    type: 'topic',
    order: 3110
  },
  {
    id: 'MKaRMg4cBlqSKghq4LCu',
    type: 'format',
    order: 2130,
    name: 'panel'
  },
  {
    id: 'MwG7DfZ9Je0q7yrhiYJo',
    name: 'virtual tour',
    type: 'format',
    order: 2210
  },
  {
    id: 'P2enYG1P5YLHLMKGVf5v',
    name: 'LGBTQ2S+',
    type: 'audience',
    order: 4070
  },
  {
    id: 'PuBC9xwnuCEU5kR03Bve',
    type: 'cost',
    order: 1020,
    name: 'low-cost'
  },
  {
    id: 'QYy2S3N7FbixbbuUKiKK',
    name: 'interpersonal',
    type: 'topic',
    order: 3070
  },
  {
    id: 'R0IAmZvpCclmvg3UG4JI',
    name: 'multilingual',
    type: 'other',
    order: 9010
  },
  {
    id: 'RWc2iK6uWN2bQ9NrJGNP',
    name: 'trial',
    type: 'cost',
    order: 1070
  },
  {
    id: 'SJzeDJz6UL3hM9hOgLjM',
    name: 'art',
    type: 'format',
    order: 2030
  },
  {
    id: 'SPpkj0qbGOqXTR5lDNNY',
    name: 'panic',
    type: 'topic',
    order: 3090
  },
  {
    id: 'T7rf6lbsr64DOMsXjyQw',
    type: 'format',
    order: 2170,
    name: 'recording'
  },
  {
    id: 'UEGq6P9pHk9SgGujcVgh',
    name: 'hate/racism/xenophobia',
    type: 'topic',
    order: 3060
  },
  {
    id: 'UJFbvU4VcuRsEJ6J0Cvz',
    name: 'free',
    type: 'cost',
    order: 1010
  },
  {
    id: 'W7szkBzGrIFcmHXzSXp3',
    name: 'employees',
    type: 'audience',
    order: 4030
  },
  {
    id: 'XiNPDiek0SUpTqODnCFQ',
    name: 'phone',
    type: 'format',
    order: 2150
  },
  {
    id: 'YFAUSY5PrVBcntAw16QU',
    type: 'audience',
    order: 4120,
    name: 'with disabilities'
  },
  {
    id: 'bNyCFySbmyAd1E7wRmZl',
    name: 'video',
    type: 'format',
    order: 2200
  },
  {
    id: 'bgqU7YCC3GlnbbecbDKO',
    name: 'students',
    type: 'audience',
    order: 4110
  },
  {
    id: 'c5aHgTE0s7uhFXinSEPH',
    name: 'webinar',
    type: 'format',
    order: 2220
  },
  {
    id: 'gJKhSxtZ91Hn5SNyoU70',
    name: 'text',
    type: 'format',
    order: 2190
  },
  {
    id: 'gaeHuZ1NhkkOFcqSNnCa',
    name: 'isolation',
    type: 'topic',
    order: 3080
  },
  {
    id: 'jfVbMq9PgcfPMnrygQIb',
    type: 'audience',
    order: 4010,
    name: 'BIPOC'
  },
  {
    id: 'kUCnb1FrGt0liGVbO69b',
    name: 'abuse',
    type: 'topic',
    order: 3010
  },
  {
    id: 'lJFqNAyaGmThgHTpOmDU',
    name: 'anxiety',
    type: 'topic',
    order: 3020
  },
  {
    id: 'lxkTouDfNGebQkswhiGP',
    name: 'website',
    type: 'format',
    order: 2240
  },
  {
    id: 'nzsciD2Yc25cIlF3PZtn',
    type: 'format',
    order: 2140,
    name: 'peer support/group'
  },
  {
    id: 'pN0WjAKdhqeMwZVs7IBR',
    name: 'depression',
    type: 'topic',
    order: 3040
  },
  {
    id: 'q3G31cduDS8dcECBL97A',
    name: 'facebook',
    type: 'format',
    order: 2090
  },
  {
    id: 'qWC8DLCnc1Y01WEOmag7',
    type: 'format',
    order: 2050,
    name: 'audio'
  },
  {
    id: 'r9iw7nxOm8VfKJ2Xi2jI',
    name: 'chat',
    type: 'format',
    order: 2060
  },
  {
    id: 'rGAIsC4hY2fj76ZMgmFJ',
    name: 'parents',
    type: 'audience',
    order: 4080
  },
  {
    id: 'rsNOheT2MIYnwe4TNVHb',
    name: 'caregivers',
    type: 'audience',
    order: 4020
  },
  {
    id: 'sYilgV2dWKoeIHqvrgp0',
    name: 'app',
    type: 'format',
    order: '2020'
  },
  {
    id: 'ssH7ycWe7u25cxLE9Ly5',
    name: 'grief',
    type: 'topic',
    order: 3050
  },
  {
    id: 'uFJUXFL2T1GPqOKxR6EO',
    name: 'article',
    type: 'format',
    order: 2040
  },
  {
    id: 'uZRGXe3b9yacgemOOxm4',
    name: 'sliding scale',
    type: 'cost',
    order: 1060
  },
  {
    id: 'uedmAs1KDqderoxkqQ9d',
    name: 'trauma',
    type: 'topic',
    order: 3120
  },
  {
    id: 'vS1iQdj7lOoARgK11jE6',
    type: 'format',
    order: 2100,
    name: 'instagram'
  },
  {
    id: 'wE6dEFKrnGutAB3qOL4l',
    name: 'productivity',
    type: 'topic',
    order: 3100
  },
  {
    id: 'x49joBkOiGWAKjF5vapi',
    name: 'promotion',
    type: 'cost',
    order: 1030
  }
]

module.exports = { categories, locations, tags }
