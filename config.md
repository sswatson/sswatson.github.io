<!--
Add here global page variables to use throughout your
website.
The website_* must be defined for the RSS to work
-->
@def website_title = "SSW"
@def website_descr = "Samuel S. Watson's Personal Website"
@def website_url   = "https://sswatson.com"

@def author = "Samuel S. Watson"
@def prefix = "/"

@def nestedlists = true

<!--
Add here global latex commands to use throughout your
pages. It can be math commands but does not need to be.
For instance:
* \newcommand{\phrase}{This is a long phrase to copy.}
-->
\newcommand{\R}{\mathbb R}
\newcommand{\scal}[1]{\langle #1 \rangle}

\newcommand{\list}{~~~<ol>~~~}
\newcommand{\endlist}{~~~</ol>~~~}
\newcommand{\item}[1]{~~~<li>~~~#1~~~</li>~~~}