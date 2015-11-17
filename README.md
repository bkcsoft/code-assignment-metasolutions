Comment-app (code assignment)
===========

Approach taken
--------------
TL;DR; Use as many libs as possible \o/

I've use AngularJS for DOM-manipulation and state-keeping,
and Rangy for Selection-handling.
I choose AngularJS because I know it, and it is in my opinion
cleaner than using e.g. jQuery.  
Rangy was chosen mearly by recommendation, apparently highlighting
stuff in a browser with VanillaJS was harder than I thought.

How it works
------------
The app works by copying the Range-object into a temporary variable when
text is selected, when the "Add Comment"-button is pressed a small
dialog-window pops down and asks for a Comment.  
When a comment is entered
and the "create comment"-button is pressed the temp-var is pushed to the
comments-array (which stores all selections).  
If a comment is listed, it can be pressed to highlight the previously
selected text.

Challenges for a using on a broader scale
-----------------------------------------
TL;DR; Bug-fixes and serious refactoring...

Too use this on a broader scale I'd have to refactor it for better scoping.  
First and foremost, the selection is buggy as h*ll and theres
a bunch of work-arounds to make it _act_ less buggy. (Basically there's no way
to know if something is actually highlighted, and if said highlight is still
valid)  
Also I have no clue if the selection-array can be saved/restored to/from
localStorage and still be valid, so that has to be tested (I'm assuing
"broader scale" includes saving stuff...).
The main-issue being node-references and everything besides the text & comment-list.

Dependencies
------------
- [AngularJS](https://angularjs.org)
- [Rangy](https://github.com/timdown/rangy)
- [Materialize](http://materializecss.com)

(not included in this repo for size, please use `bower install`)
