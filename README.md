# learning-react
Learning React Notes

Create Thumbnails from existing photo, just drag and drop photo in below site and it automatically
  downloads a zip file with thumbnail photo to my computer!!
  http://makethumbnails.com/#dropzone


Create React App:
https://github.com/facebook/create-react-app
	https://github.com/facebook/create-react-app#creating-an-app

Wiring of React App from Stack Oveflow:
---------------------------------
Below explains how index.html/index.js is wired (npm/webpack are involved to build a React App and then to start the local server http://localhost:3000):

VERY GOOD EXPLANATION:
https://stackoverflow.com/questions/41738421/how-react-js-index-js-file-contacting-index-html-for-id-references


Here is what Aftab Khan wrote:

Create-React-App is very interesting setup.

I started my digging from the package.json npm script start

"start": "react-scripts start"

That takes me to their binary react-scripts under node_modules/.bin
I'll post the relevant stuff here.

switch (script) {
  case 'build':
  case 'eject':
  case 'start':
  case 'test': {
    const result = spawn.sync(
      'node',
      [require.resolve('../scripts/' + script)].concat(args),
      { stdio: 'inherit' }
    );
So this tells me that they are looking for script inside ../scripts/ folder.

So I go to the react-scripts npm module(node_modules/react-scripts) and open up the node_modules/react-scripts/scripts/start.js file since I was doing npm start.

Now here is where I found the webpack config I was looking for.
They were specifically referring to node_modules/react-scripts/config/webpack.config.dev.js. I'll post the relevant stuff here.

entry: [
  // Finally, this is your app's code:
  paths.appIndexJs,
],
plugins: [
  // Generates an `index.html` file with the <script> injected.
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml,
  }),
So file referred by paths.appIndexJs is the entry file in the webpack config.

And they are using HtmlWebpackPlugin to load the html at the path paths.appHtml.

Final piece of the puzzle is linking this back to the files you posted. Posting relevant stuff from paths.js

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = {
  ...
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  ...
}
So inside your application directory,
appHtml is file public/index.html
appIndexJs is file src/index.js

Your two files in question.
Wow! That was quite a journey..:P


ANOTHER USER ADDED TO ABOVE COMMENTS:

To consolidate @Aftab Khan comments 

npm start 

Below adding individual links for above commands for node @8.9.4
@node_modules/react-scripts/bin/react-scripts.js  >> line number 35
@node_modules/react-scripts/scripts/start.js  >> line number 46
@node_modules/react-scripts/config/webpack.config.dev.js >> line number 21, 102
@node_modules/react-scripts/config/paths.js >> line number 56

