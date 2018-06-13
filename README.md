# ExploringVueJs2.0
>This repo has been created for education purposes only. To learn and explore the things about Vue Js <br/>

####Directives

```code
v-on:input : when you give some input to 
any input field this event fired.
```
```code
v-bind  : this directive tells html dom element
 that should access the value from vue js not normally.
```
```code
v-once  : this directive helps if 
one variable is updated later on 
with some new value it defends 
that variable to be overwritten.
```
v-html : Renders html code from vue js rather than normal text
[eventlisteners and event modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers)
```code
v-model    : this binds the value of a variable with a control
```
```code
computed   : this property prevents vue js 
to use the whole page for a single 
function which is not actually executing. 
Rather than method property somebody 
can write the function inside of computed rather than method.
```
```code
watch     : this property react to each changes which 
has been done to variable or similar asynchronously.
```
```code
shorthand : use @ sign at the place of 
v-on:click like @click. v-on:href could be :href like this way.
```
```code
v-if : this is a kind of conditional checking in vue js.
in this kind of conditional checking , if check fails,
vue does not hide that dom element to make it disappear in the dom.
it completely removes it.
* Now if you really wanna hide it like display:none; then you
gotta use v-show instead.
NOTE: if you are using vue js 2.1 or higher then you have
access to v-else-if else you have to use v-if & v-else.
```
```code
v-for: this helps us to generate a list from an array its just 
like a for loop.
```
```code
:key: in case of loop by default vue js keep a track of only index.
Not the actual element. Now for that make a key binding with the 
thing which you actually wanna keep track of .
so that in future whenevr you try to update any value,
without hastle it works.
```

