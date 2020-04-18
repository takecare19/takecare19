# TakeCare19
Accessible mental health resources for coping with covid19
A serverless web-app built with Vue, Vuetify, and Google Cloud Firestore

## Quick Links

### Documentation

[Vue](https://vuejs.org/v2/guide/)

[Vuetify](https://vuetifyjs.com/en/)

[Firestore](https://firebase.google.com/docs/firestore/query-data/get-data)

### Tutorials

[Vuex](https://www.youtube.com/watch?v=5lVQgZzLMHc&t=2070s)

[Vue with Firestore](https://www.youtube.com/watch?v=sYNjEzcOTOs)

### Links

[Github](https://github.com/takecare19/takecare19)

[Z](https://zeit.co/teams/teamtakecare19/settings/members)[e](https://zeit.co/teamtakecare19/takecare19)[it](https://zeit.co/teams/teamtakecare19/settings/members) 

[Local Database](https://console.firebase.google.com/u/1/project/takecare19app/database/firestore/data~2Fcategories~2F3XPwVvmldDcEUUlfsrG2) (used for local development)

[Prod Database](https://console.firebase.google.com/u/1/project/takecare19-prod/database/firestore/data~2Fcategories~2F3JeIOXT7sy7KOWUgX9zk) (used for ZEIT deploys and eventually production)

---

# Development Process

### Branching

- There are two main branches on github, `master` and `development`
- `master` is our default branch because it is what we use for production deploys on Zeit
- When starting a feature, please create a new branch off of `development`. Use a descriptive branch name that describes the feature you are working on.

### Pull Requests

- When submitting a pull request, you'll have to manually select `development` as the base branch.
- You can submit more than 1 PR per ticket, so you can choose how you want to break a ticket down
- Please add testing instructions and a link to the relevant Zeit deploy for every PR
- Pull requests need 2 approvals to be merged: one by Vivian and one by the other developer
- First request a review from the other developer, and then after that's approved request one from Vivian (remember to assign the ticket to Vivian move it to the "Needs Review" column at this state)

---

# Local environment setup

In your terminal, navigate to where you want the project to live. Clone the repo

    git clone git@github.com:takecare19/takecare19.git
    cd takecare19

Install modules

    npm i

In the root directory of your project, create 3 files: `.env`, `prod-service-account.json`, and `dev-service-account.json`. Susie can give you the contents for these files.

Switch to the `development` branch

    git checkout development

Create a new branch for your feature

    git checkout -b name-of-new-branch

Start the development server

    npm run serve

Work on your feature. Add, commit, and push as usual

    git add -A
    git commit -m "A useful commit message"
    git push origin name-of-new-branch

It is good practice to regularly merge in `development` branch into your current branch

    git fetch
    git merge development
