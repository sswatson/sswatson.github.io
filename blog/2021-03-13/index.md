~~~
<style>
button:focus {
  outline: none;
}
</style>
~~~

@def title = "Binary Search"

# Binary Search

You bought 100 lottery tickets, and you want to be able to tell as quickly as possible whether you have a winning ticket. So before the announcement event, you put all of your tickets in order. 

Click on the triple question marks below to see the winning ticket number, and then click on your cards to find it. Try to do it in as few clicks as possible.

~~~
<!--
<script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
-->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<div style="text-align: center; width: 100%">
  <div id="binary-search-game">Loading...</div>
</div>
<script src="search-game.js"></script>
~~~

## Questions

1. How many clicks would you need in order to *guarantee* that you can find the winning ticket (assuming it's there)? Come up with a strategy that makes this number as small as possible.
2. Suppose that we replace 100 with a variable $n$. In terms of $n$, approximately how many clicks would you need to be sure you could find the winning ticket? How does this compare with the strategy of checking the first ticket, then the second, the the third, and so on?

    *Hint: the graph below illustrates how much better the best strategy is than the naive one.*

~~~
<div style="text-align: center; width: 100%;">
<iframe src="https://www.desmos.com/calculator/sh3bycxt5u?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>
</div>
~~~