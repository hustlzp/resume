#Resume

http://resume.hustlzp.com

My online resume, built with Node.js and served by GitHub Pages.

* Separate resume's data & structure as `data.yml` & `index.jade`
* Build `index.html` when `data.yml` or `index.jade` changes
* Auto generate resume's last update time
* Write errors to index.html for the ease of debugging

##Build your own resume

You can fork it and build your own resume quickly as follows:

* Fork and clone
* `npm install && sudo npm install -g gulp`
* Checkout branch `gh-pages` and run `gulp`
* Change `data.yml`, `index.jade`, css and js files as you like
* Commit and push, go [http://your_username.github.io/resume](http://your_username.github.io/resume) to check whether GitHub has finished building the pages :beer:

Note: GitHub won't start pages building until you push at least one commit.

##Bind custom domain

Wanna to bind your own custom domain?

* Checkout branch `gh-pages`
* Replace with your domain in file `CNAME`
* Configure your domain's DNS to add a CNAME record pointing to `your_username.github.io`
* Wait for the new record taking effect :beer:
