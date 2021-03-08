@def title = "Search"

# Search

~~~
<form action="/search/" style="padding-top: 15px">
    <div class="tipue_search_left"><img src="/assets/search.png" id="tipue_search_icon"></div>
    <div class="tipue_search_right"><input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required></div>
    <div style="clear: both;"></div>
</form>
<div id="tipue_search_content"></div>
~~~