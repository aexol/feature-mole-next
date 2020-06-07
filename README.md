## Instalation
```bash
npm i
```

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Also please replace MOLE_TOKEN with your personal access token
Project is still Work in Progress.

# Feature mole

Nowadays everybody is looking on how to utilize the lean production model - even IT companies.

## Overview

Feature mole is a B2B system for connecting open source repositories with commercial support to get their issues done by freelancers and/or companies. 

## Problem to solve

In open source community contributors usually work in companies creating the software or are partners to creating the software. Rarely somobody comes from outside to help. 

This is why we need featuremole.com to push things forward. The faster Open source software will be made, the sooner we will visit other Galaxies in person.

## Terms
**Company** - User who creates issues and pays for them with worms
**Supplier** - User who resolves the issues for worms
**Worms** - Internal currency ( each user will receive free 100 worms in beta stage on signup after that worms will be sold ) 

## Company

### Issue creation 
Company is willing to have its issue done
#### Process
1. Create an issue and/or points to the issue in public repository.
2. Estimate the time needed to solve the issue.
3. Provide programming languages needed to solve it.
4. Optionally provide deadline for the issue.
5. Click create

### Deal acceptation
Company wants to accept the deal.
#### Process
1. Browse proposed deals.
2. Choose one that fit your needs and budget.
3. Click Accept
4. Transfer worms to the FeatureMole.com
Now the worms are frozen until Supplier solves the issue

### Accept Finished work
After Supplier finishes the issue Company and there is no need of commenting.
#### Process
1. Browse accepted deals
2. Select the one 
3. Click accept
Now the work is accepted and worms are transferred to the Supplier

### Reject Finished work and comment
After Supplier finishes the issue and Company is not satisfied with work done.


## Supplier

### Deal offering 
Supplier is willing to earn worms and/or money on resolving the open source issues.

#### Process
1. Browse open issues
2. Find an issue you are capable of doing.
3. Provide time needed for you to solve the issue.
4. Provide budget you want to receive
5. Click offer.


### Start working on the issue
After the deal is accepted by the Company, Supplier starts woking on the issue. 

#### Process

1. Browse accepted deal offerings
2. Enter the accepted deal
3. Click Start Working.
4. Ask any questions if needed.

Now proceed to the working on the issue

### Finish the issue

Mark the issue as finished. Should be after pull request is done.

#### Process

1. Browse issues you are working on
2. Click the issue
3. Mark issue done

Now wait for the issue creator Company to comment or accept your job(they have 3 days for that).

### Spend worms on other issues you want solved

You can spend your woms to help other issues of popular repositories

## User

### Sign up

Signup to featuremole.com  will be available with gitlab and github.

#### Process

1. Sign up using oath with github or gitlab
2. Type your first and last name or company name
3. Select programming languages you use
4. Click create


### Browse the issues

Browse all available issues which have not yet come to any deal

### Issue detail

Open issue details and comments

### Comment/Reply to on issue

Comment to ask question about the issue or propose another solution.

## Offer

Offer must have needed number of worms to be paid by Company and/or any additional terms( including paying with real money) for issue resolution.

## Monetization

Feature mole will take a fee of 5% of worms (minimum 1 worm) per each finished deal between parties. Worms cannot be sold be users but later on we will cut the initial worms to 0 and sell worms at price calculated from exisiting transactions and the real value in it.

After beta featuremole.com will earn on selling worms to users. Featuremole.com will only produce worms and sell them for the price of worm determined by market.

## Underground market

After beta user can transfer the worms to other user. If he wants to pay you for those worms with cash or anything else you can do it without featuremole.com permission.

Featuremole.com doesn't want to control the worms flow and will not intervene at any time to increase or decrease value of worms. Price of 1 worm can fluctuate over the time featuremole.com exist.

## Technical details:

[Schema](https://app.graphqleditor.com/a-team/feature-mole?visibleMenu=code)
[Docs](https://aexol.github.io/featuremole.com/Query.html)