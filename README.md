Resume
=============

http://resume.hustlzp.com

My online resume, built with NodeJS and served by GitHub Pages.

You can fork it and build your own resume quickly as the following steps:

* Fork and clone to local
* `npm install && sudo npm install -g gulp`
* Checkout branch `gh-pages` and run `gulp`
* Fill up your personal information to `data.js`
* Commit and push, go [http://your_username.github.io/resume](http://your_username.github.io/resume) to check whether GitHub has finished building the pages :beer:

Wanna to bind your own subdomain(such as `resume.hustlzp.com`)?

* Checkout branch `gh-pages`
* Replace with your domain in file `CNAME`
* Configure your domain's DNS records to add a CNAME record which points to `your_username.github.io`
* Wait for the new record taking effect :beer:
