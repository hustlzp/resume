#Resume

http://resume.hustlzp.com

My online resume, built with Node.js and served by GitHub Pages.

* Separate resume's data & structure as `data.yml` & `index.jade`
* Build `index.html` when `data.yml` or `index.jade` changes
* Auto generate resume's last update time
* Write errors to index.html for the ease of debugging

##Usage

```sh
npm install
sudo npm install -g gulp
git checkout gh-pages
gulp
```
