const categories = [
  {
    id: '3JeIOXT7sy7KOWUgX9zk',
    name: 'Informational',
    order: 10
  },
  {
    id: '8Ny050nF50gOoXxPgMbW',
    name: 'Resisting Hate/Fear',
    order: 50
  },
  {
    id: '9geEVgJVxwzZvv8FmTJ2',
    name: 'Being Active',
    order: 25
  },
  {
    id: 'All',
    name: 'ALL',
    order: 1
  },
  {
    id: 'C3dJG2UJz8H6KlCkghbQ',
    name: 'Staying Creative',
    order: 30
  },
  {
    id: 'FEumLlCmAc5zQVAvBtdV',
    name: 'Social Services',
    order: 40
  },
  {
    id: 'GFK0Izjn1gX0tFrCcnNn',
    name: 'Keep Learning',
    order: 20
  },
  {
    id: 'KOhg8XVTLsnwxqC3WWhb',
    order: 55,
    name: 'Online Therapy'
  },
  {
    id: 'O7sQvfvZUQ6mZqDafaFO',
    name: 'Local Therapy',
    order: 60
  },
  {
    id: 'QwUIN4g6euGuSoUI0Yeh',
    order: 100,
    name: 'Miscellaneous'
  },
  {
    id: 'ZNrUvRN4asfFk3FxpWh3',
    name: 'Crisis',
    order: 0
  },
  {
    id: 'ZeMEYmQsd8SKIQqAA7AL',
    name: 'Working Better',
    order: 45
  },
  {
    id: 'kaoFxEzS8aYrK6NSoEzw',
    name: 'Supporting Others/Community',
    order: 15
  },
  {
    id: 'w0gtsx4ckG8VyzL19GxH',
    order: 35,
    name: 'Mindfulness'
  }
]

const locations = [
  [
    { id: '0GHEIYUBtuxmLlOzHLd4', name: 'Ontario', order: 120 },
    { id: 'CaDm5zWm82h7eLIXgXye', order: 100, name: 'Canada' },
    { id: 'P7cn4TqZEBzH7tV5c8FL', name: 'Toronto, ON', order: 140 },
    { id: 'PdFkW2NseEATQzCL8jZM', name: 'Ottawa, ON', order: 130 },
    { id: 'gPaj0FpaOjbAaU8wQEfR', name: 'United States', order: 1000 },
    { id: 'i6G7CdD6Z0wN1rE1jadn', name: 'Anywhere', order: 1 },
    { id: 'tMim2vVCU0ZVRkXAiVKf', name: 'Vancouver, BC', order: 210 },
    { id: 'y8jOgKjU0CB5RQWtdgxG', name: 'International', order: 5000 }
  ]
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
    name: 'website',
    type: 'format',
    order: 2230
  },
  {
    id: '3vTxbrW5ipAgZKXCZrXP',
    name: 'inspirational',
    type: 'topic',
    order: 3062
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
    type: 'audience',
    order: 4040,
    name: 'employers'
  },
  {
    id: '5AE9XYC5gt1XzYxbm3pl',
    name: 'seniors',
    type: 'audience',
    order: 4100
  },
  {
    id: '7mEydI2tZDums7nEUVx3',
    name: 'front-line workers',
    type: 'audience',
    order: 4050
  },
  {
    id: '7zMvDTWd79Kvnllpr0w8',
    name: 'android',
    type: 'format',
    order: 2010
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
    id: 'AiXmdWqmoiub5ruJOKm4',
    name: 'body-positive',
    type: 'audience',
    order: 4012
  },
  {
    id: 'BBXzbkNhUCyEI3VL3jp5',
    name: 'muslim',
    type: 'audience',
    order: '4072'
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
    id: 'BUgmiu8M8QGnGl3Sldu2',
    name: 'womxn',
    type: 'audience',
    order: 4122
  },
  {
    id: 'CCr3szDilmyAbA2fLFNw',
    name: 'community',
    type: 'format',
    order: 2070
  },
  {
    id: 'CfKIjfwhhYViJOjCEk1N',
    name: 'live',
    type: 'format',
    order: 2120
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
    type: 'format',
    order: 2180,
    name: 'service'
  },
  {
    id: 'HhMtAlQZNqxbwhw9OXQH',
    name: 'support',
    type: 'topic',
    order: 3110
  },
  {
    id: 'IevR1WiN85FQR6S47UPe',
    name: 'resource list',
    type: 'format',
    order: 2112
  },
  {
    id: 'JDGqvdzoDNqjhHsoyGWR',
    name: '24/7',
    type: 'format',
    order: 2005
  },
  {
    id: 'LA1qzt0NPyzDk08HSgr5',
    type: 'topic',
    order: 3012,
    name: 'addiction'
  },
  {
    id: 'MKaRMg4cBlqSKghq4LCu',
    name: 'panel',
    type: 'format',
    order: 2130
  },
  {
    id: 'McJzdFqQNamTVMjx9t68',
    name: 'self-care',
    type: 'topic',
    order: 3101
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
    name: 'low-cost',
    type: 'cost',
    order: 1020
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
    type: 'format',
    order: 2122
  },
  {
    id: 'RGU6ttrhhnuG6nN91B24',
    name: 'spiritual',
    type: 'topic',
    order: 3102
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
    name: 'recording',
    type: 'format',
    order: 2170
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
    id: 'UgBMKNOkvOftsDd3NJKN',
    type: 'format',
    order: '2240',
    name: 'workshop'
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
    type: 'format',
    order: 2200,
    name: 'video'
  },
  {
    id: 'bcrqArlCvnDQn9DknAY0',
    name: 'immunocompromised',
    type: 'audience',
    order: '5052'
  },
  {
    id: 'bfI4cx6NnBbexEsbLzir',
    name: 'PDF',
    type: 'format',
    order: 2132
  },
  {
    id: 'bgqU7YCC3GlnbbecbDKO',
    name: 'students',
    type: 'audience',
    order: 4110
  },
  {
    id: 'c5aHgTE0s7uhFXinSEPH',
    type: 'format',
    order: 2220,
    name: 'webinar'
  },
  {
    id: 'gJKhSxtZ91Hn5SNyoU70',
    type: 'format',
    order: 2190,
    name: 'text'
  },
  {
    id: 'gaeHuZ1NhkkOFcqSNnCa',
    name: 'isolation',
    type: 'topic',
    order: 3080
  },
  {
    id: 'jfVbMq9PgcfPMnrygQIb',
    name: 'BIPOC',
    type: 'audience',
    order: 4010
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
    id: 'lbxBp09JAgSze9GyjAg5',
    type: 'topic',
    order: 3104,
    name: 'stress'
  },
  {
    id: 'lxkTouDfNGebQkswhiGP',
    name: 'website',
    type: 'format',
    order: 2240
  },
  {
    id: 'nzsciD2Yc25cIlF3PZtn',
    name: 'peer support/group',
    type: 'format',
    order: 2140
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
    id: 'qDCe1ocOcN59lBwwIUOz',
    name: 'educators',
    type: 'audience',
    order: 4022
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
    type: 'format',
    order: '2020',
    name: 'app'
  },
  {
    id: 'ssH7ycWe7u25cxLE9Ly5',
    type: 'topic',
    order: 3050,
    name: 'grief'
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
  },
  {
    id: 'zPiJfZ2m8PEcqc5szSRB',
    name: 'workbook',
    type: 'format',
    order: 2232
  }
]

module.exports = { categories, locations, tags }
