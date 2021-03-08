@def title = "Technology"

# Technology

## Prismia

[Prismia](https://prismia.chat) is a full-featured learning platform with the following ambitions:

- significantly increase communication bandwidth between students and instructional staff during class
- make it easy to build genuinely reusable course components (lecture materials, assignments, exams, etc.)
- provide tools for rich, interactive visualizations
- minimize friction for both teachers and students

The idea is that you build your lessons in Prismia as a sequence of messages to send to students. The messages may include rich text, images, interactive figures, or executable code (with Julia, Python, and R as the languages currently supported).

Your lesson can then be deployed either in a live class or as an asynchronous learning activity:

~~~
<img src="/assets/shared-lesson.png" style="margin-left: auto; margin-right: auto; width: 90%; max-width: 800px; display: block; padding: 0"/>
~~~

In the live-class deployment, you get the students' replies clustered based on content so you can quickly identify common themes and even respond on a group-by-group basis:

~~~
<img src="/assets/live-classroom.png" style="margin-left: auto; margin-right: auto; width: 90%; max-width: 800px; display: block; padding: 0"/>
~~~

Teaching a Prismia lesson is easier than teaching with slides because you're relieved of the cognitive burden of remembering the narration that the slides are designed to accompany. This makes Prismia lessons highly reusable and transferrable.

In addition to live-class and asynchronous lessons, Prismia also has a message board and an assignments page with a really smooth and efficient grading interface:

~~~
<img src="/assets/grading-interface.png" style="margin-left: auto; margin-right: auto; width: 90%; max-width: 800px; display: block; padding: 0"/>
~~~

Prismia has accumulated many built-in conveniences to make life easier for instructors and students:
- multiple choice questions
- message starring and flagging
- sharing individual student messages with the class
- live summaries of the class's responses to a given question
- a variety of tools for coordinating responses from instructional staff to students during class
- an equation editor
- a drawing tool, with support for drawing questions (*sketch a graph*, *circle the part of the figure...,* etc.)
- scratch code cells for students
- summary reports and metrics on students' responses during class
- a system for marking certain messages as requiring a response
- plain-text or Jupyter export of lessons and assignments
- Jupyter assignment *importing* for students

If you want to give Prismia a try, you can create a course at [https://prismia.chat](https://prismia.chat). You can always export any lessons you create, so you don't have to worry about lock-in.

### Example lessons

Here are some places to look for example lessons and other Prismia content:

- The DATA 1010 [class table](https://data1010.github.io/class), which contains lots of lessons on probability, statistics, and machine learning.
- The [Winter R Course](https://prismia.chat/shared/data-science-in-R), which has 10 lessons (with accompanying videos).
- The [Machine Learning with Mathlets](https://prismia.chat/shared/ml-with-mathlets) showcase lesson.
- The [Machine Learning Mathlet Gallery](https://prismia.chat/shared/gallery), which is a sequence of mathlets designed to illustrate various ideas in machine learning.
- The DATA 2040 [class table](https://data2040.github.io/), which contains lessons on deep learning (based on the [D2L book](https://d2l.ai) and prepared by Google researcher [Boqing Gong](http://boqinggong.info/)).

## Data Gymnasia

Prior to the development of Prismia, I took advantage of Philipp Legner's amazing [Mathigon](https://mathigon.org/) platform to develop interactive data science content to help incoming students prepare for the DSI Master's Program. Mathigon has graciously agreed to host that material at [https://mathigon.org/data-gymnasia](https://mathigon.org/data-gymnasia). 

The content available on Data Gymnasia is still much more extensive than what has been built on Prismia, and the vision is very similar (with an emphasis on highly interactive, narrative-driven lessons). The courses include standard ones like Probability, Statistics, Machine Learning, Linear Algebra, Introductions to Julia and Python, etc., as well as some more novel ones like the Utilities course, which covers tools like Git, VS Code, and Docker.

I recommend starting with Data Gymnasia if you're looking to *learn*, and Prismia if you're looking to *create*.