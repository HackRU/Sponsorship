# Admin Dashboard (known as frontend)

## Description (wtf is this)


Welcome to HackRU's front-end.  The front end is in charge of several things, namely what the user sees when accessing http://www.hackru.org,
and how the behind-the-scenes functionality operates so that people can navigate through and use the dashboard.  
Some things we do on the dashboard are:
1.  Sign up, login, and register
2.  Handle magic URL's
3.  Events list
4.  Slack messaging
5.  Admin dashboard

If you're on this branch, that means you're helping maintain/manage the front-end.  
Some parts of the front-end are broken, and much of the code looks/behaves yucky, and I explain this further in the document.

You have joined the team as a mechanic/manager/maintenanceperson for the front-end, otherwise known as a MF'er.

Welcome ~~to hell~~ to HackRU, MF'er.

## Inspiration (how the hell did we get here)

Heman has written a nice [wiki]: https://github.com/HackRU/lcs/wiki/History discussing the history of HackRU, and I encourage reading it for context.
You should also at some point met up with us to demo the current state of the front-end and discuss all open issues and goals for this HackRU.

The people who worked on the React to its current state, AFAIK, are:

*   Heman Gandhi
*   Kabir Kuriyan
*   Fan Liu


The people who have worked on the CSS to its current state, AFAIK, are:

*   David Chen
*   Kabir Kuriyan


## Installation Guide (how a MF'er can get started)


1.  After cloning in and [setting up a feature branch]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow, get dependencies from package.json by running `npm install`
2.  Get nvm in your computer.  Use something like `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
3.  You should have .env in project root and config_resume.js somewhere in src, you'll have to obtain these separately (ask Heman or any of the others listed above)
4.  Check things out by starting the server: `sh ec2-run.sh`

## Example Uses (why care)

It's literally how http://www.hackru.org runs.  pls help.

## Style Guide (Heman is an occupational hazard and we need linters)

So the thing is ~~I am a huge fan of anarchy and using tabs~~ I've only worked on smaller projects.  A style guide here can and will be useful. 
We will likely be using something custom, with enough rules to make code uniform and easy to review, 
but without so many rules that it's a hassle for us to read or write anything.  

A good place to start: https://github.com/airbnb/javascript/tree/master/react

But I will likely add a .eslintrc configuration file for us to follow once I work it out.  


## TO-DO List (the heck are we doing)

Your duties will be assigned according to needs, but they will follow these overarching goals:

0.  Figure out roles
-   Create feature branches
-   Check out/investigate the current state of the front-end
-   Learn about its parts and how they work
-   Have an okayish understanding at minimum about the codebase, namely Node and Webpack, React, Redux, and JS-CSS-HTML in general 

1.  Fix open and immediate issues, depending on their criticality
-   Heman is gonna open issues and yell at us.  Our job will be to attempt to fix said issues and then yell back at him.  
-   There are gonna be edge cases to think about and unfortunately, this may result in inelegant temporary solutions.  If and when this happens, make note of what's wrong with the solution and how it acts as a band-aid.  This way, you can get back to it and fix it properly.


2.  Implement Redux - a solution for the current yucky implementation
-   Having done projects with just pure React before, dealing with states and props can be a terrible and annoying experience (sibling-sibling flow, child-parent flow).  With Redux, the state of everything can be managed by a central store.  This "single source of truth" can be referred to for consistent information.  
-   Redux and good Redux practices allow the mechanics to be separated from the appearnce.  Components should care about displaying results and getting input.  Handling said input, implementing business logic, and displaying results should be handled by the actions, and as such, be kept separate.  This also allows us to worry less about accidentally having a "side effect" during part of a component life-cycle.  
-   Finally, I think this could make us less prone to errors that occur when multiple people work on the same file.

3.  Removing modals and switching to better interfaces
-   We don't want this "card pop-up" occurring when users need to insert input.  A form that's attached to the page will do fine enough.  Details will come later.   

4.  Testing
-   This leads more into point 1., in the sense that we should get into the proper practices of code reviews, unit testing, integration testing, etc.
-   This includes having a Style Guide as mentioned above, and we will be learning together some good testing schema
-   Make sure you test on your local branches before you push upstream, and do your best to attend meetings so we're all on the same page

## Links to Further docs (please read some of this shit)

**Links to tutorials and guides go here**

## Don't Panic (~~I do that enough~~)

Seriously, I know that this project is not part of your required curricula.  It's something extra, it's something for the community, and it means learning a lot of things on the fly.  
This can be a huge boon - you will definitely have a tremendous amount of experience, both technical-wise and organization-wise.  This community is a great opportunity to expand your network.  

In case something goes wrong, or in case of a fire, or in case you feel overwhelmed or daunted by what's going on, here are some rules that have personally helped me before:

1.  Take some time to calm down and chill out.  Health comes first, even from a practical perspective.  You can't fix anything while panicking.  HALT is a real good pattern to keep in mind:  Don't try to work on things when you are hungry, angry/upset, lonely/lost, or tired to the extent that you can't perform properly.  It will make things worse.  Heroes be damned, don't try to stay up til 5am working on something on your own.
2.  Write down what exactly has gone wrong and tell someone.  Contact me, one of the directors, our assigned rnd mentor, the git-help channel, etc.  We will all will be willing to help clean up the mess.   It's not just because this project affects all of us, and it's not just because we have a responsibility - it's because we literally have set shit on fire before and caused holy hell to occur through our mistakes.  We want to be do as much as we can, and yelling and accusing people is definitively counter-productive.  (Leave that for the post-mortem party ;) )
3.  Cooperate and work together with whoever's helping you to fix what happened as much as possible.  Stay on the issue, learn from it, and don't add or subtract from directions to prevent further issues from rising.  
4.  After it's passed, we'll all sit down and discuss the reason for what happened.  Huge breaks and long error logs can be the result of innocent mistakes or even non-mistakes that have been handled a specific way by the library/framework/language in use.  We will all benefit from learning what happened and then implementing a procedure to prevent it from happening again.  
5.  Remember that communication is key, and that we are all very appreciative of your efforts and contributions.  If you need to stop working on HackRU, we will understand and adapt as necessary.  We just ask that you be courteous and tell of us any and all issues/questions that you have.

## Thanks for making it to the end (go be a great MF!)



