"# Small_Projects" -> https://dreamecho100.github.io/Small_Projects/
Hi 
//echo "# Small_Projects" >> README.md
//git init
//git add README.md
//git commit -m "first commit"
//git remote add origin https://github.com/DreamEcho100/Small_Projects.git
//git push -u origin master
// Link to all -=> https://dreamecho100.github.io/Small_Projects/

|-------------------------------------------------------|

|-------------------------------------------------------|

git add .
git commit -m "Upload&Update..."
git push -u origin master

|-------------------------------------------------------|

|-------------------------------------------------------|

As it is stated in the Error message you have to "fetch first." This worked for me. Use the command:

git fetch origin master

Then follow these steps to merge:

|git pull origin master| OR |git merge origin master|
/*
They are the same feature
Merge or pull requests are created in a git management application and ask an assigned person to merge two branches. Tools such as GitHub and Bitbucket choose the name pull request since the first manual action would be to pull the feature branch. Tools such as GitLab and Gitorious choose the name merge request since that is the final action that is requested of the assignee. In this article we’ll refer to them as merge requests.
--> https://about.gitlab.com/2014/09/29/gitlab-flow/
*/
git add .
git commit -m 'your commit message'
git push origin master

|-------------------------------------------------------|

npm install --save react-router-dom
npm install websocket-extensions
npm i emotion
npm install @emotion/core
npm install @emotion/styled
npm install --save radium
npm install --save styled-components
npm install --save-dev babel-plugin-styled-components
npm install axios
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
npm install react-spring
npm audit fix

|-------------------------------------------------------|


|-------------------------------------------------------|

https://reactrouter.com/web/guides/quick-start
https://emotion.sh/docs/introduction
https://github.com/FormidableLabs/radium/tree/master/docs/guides#media-queries
https://styled-components.com/
https://github.com/styled-components/babel-plugin-styled-components
https://www.npmjs.com/package/axios
https://github.com/FortAwesome/react-fontawesome
https://www.react-spring.io/

|-------------------------------------------------------|

|-------------------------------------------------------|
//
let videos = document.querySelectorAll("video");
videos.forEach( video => {
    video.playbackRate = 3;
    amplifyMedia(video, 1.5);
});

function amplifyMedia(mediaElem, multiplier) {
  var context = new (window.AudioContext || window.webkitAudioContext),
      result = {
        context: context,
        source: context.createMediaElementSource(mediaElem),
        gain: context.createGain(),
        media: mediaElem,
        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
        getAmpLevel: function() { return result.gain.gain.value; }
      };
  result.source.connect(result.gain);
  result.gain.connect(context.destination);
  result.amplify(multiplier);
  return result;
}

|-------------------------------------------------------|

|-------------------------------------------------------|
https://www.internetingishard.com/html-and-css/
https://ilovecoding.org/courses/htmlcss2
https://htmlandcssguidebook.com/
https://htmlandcssguidebook.com/
https://www.frontendmentor.io/
http://www.dontfeartheinternet.com/
https://scrimba.com/g/ghtml

https://skillcrush.com/blog/skills-to-become-a-front-end-developer/
https://www.spinxdigital.com/blog/common-web-design-languages-what-they-do-and-why-you-need-them/

https://dev.w3.org/html5/html-author/charref








https://css-tricks.com/where-do-you-learn-html-css-in-2020/


https://mix.com/

- https://www.flaticon.com/
- https://www.pexels.com/
- https://unsplash.com/
- Photo manipulation tools can give photos the appropriate look for your website
- https://www.adobe.com/gr_en/products/photoshop.html
- https://affinity.serif.com/en-gb/photo/
- https://www.gimp.org/
- https://fontawesome.com/
- https://cloudconvert.com/svg-to-ico


|-------------------------------------------------------|

|-------------------------------------------------------|