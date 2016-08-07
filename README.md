# lambadas-dashboard
Angular2 lambadas dashboard.


Angular1 to 2 Helper !!! 


<div class="showcase"><div class="showcase-content"><script>function why(id, backTo) {
  var id = "#"+id;
  var el = document.querySelector(id);
  el.hidden=el.hidden=!el.hidden;

  if (el.hidden && backTo){
    // the next line is required to work around a bug in WebKit (Chrome / Safari)
    location.href = "#";
    location.href =  "#" + backTo;
  }
}</script><script>function verbose(isVerbose) {
  isVerbose = !! isVerbose;
  var el = document.querySelector('button.verbose.off');
  el.style.display = isVerbose ? 'block' : 'none';
  var el = document.querySelector('button.verbose.on');
  el.style.display = isVerbose ? 'none' : 'block';

  CCSStylesheetRuleStyle('main','.l-verbose-section', 'display',
    isVerbose ? 'block' : 'none');
}
</script><script>function CCSStylesheetRuleStyle(stylesheet, selectorText, style, value){
  /* returns the value of the element style of the rule in the stylesheet
  *  If no value is given, reads the value
  *  If value is given, the value is changed and returned
  *  If '' (empty string) is given, erases the value.
  *  The browser will apply the default one
  *
  * string stylesheet: part of the .css name to be recognized, e.g. 'default'
  * string selectorText: css selector, e.g. '#myId', '.myClass', 'thead td'
  * string style: camelCase element style, e.g. 'fontSize'
  * string value optional : the new value
  */
  var CCSstyle = undefined, rules, sheet;
  for(var m in document.styleSheets){
    sheet = document.styleSheets[m];
    if(sheet.href && sheet.href.indexOf(stylesheet) != -1){
    rules = sheet[document.all ? 'rules' : 'cssRules'];
    for(var n in rules){
      console.log(rules[n].selectorText);
      if(rules[n].selectorText == selectorText){
        CCSstyle = rules[n].style;
        break;
      }
    }
    break;
    }
  }
  if(value == undefined)
    return CCSstyle[style]
  else
    return CCSstyle[style] = value
}</script><a id="top"></a><p>There are many conceptual and syntactical differences between Angular&nbsp;1 and Angular&nbsp;2.
This chapter provides a quick reference guide to some of the common Angular&nbsp;1
syntax and its equivalent in Angular&nbsp;2.</p>
<p><strong>See the Angular 2 syntax in this <a href="/resources/live-examples/cb-a1-a2-quick-reference/ts/plnkr.html">live example</a></strong>.</p>
<h2 id="contents">Contents</h2>
<p>This chapter covers</p>
<ul>
<li><p><a href="#template-basics">Template Basics</a> - binding and local variables</p>
</li>
<li><p><a href="#template-directives">Template Directives</a> - built-in directives <code>ngIf</code> and <code>ngClass</code></p>
</li>
<li><p><a href="#filters-pipes">Filters/Pipes</a> - built-in <em>filters</em>, known as <em>pipes</em> in Angular&nbsp;2</p>
</li>
<li><p><a href="#controllers-components">Controllers/Components</a> - <em>controllers</em> are <em>components</em> in Angular&nbsp;2.
Also covers modules.</p>
</li>
<li><p><a href="#style-sheets">Style Sheets</a> - more options for CSS in  Angular&nbsp;2.</p>
</li>
<li><p><a href="#string-dates">String date pipe</a> - a tip for displaying string date values.</p>
</li>
</ul>
<div class="l-main-section"></div><h2 id="template-basics">Template Basics</h2>
<p>Templates are the user-facing part of an Angular application and are written in HTML.
The following are some of the key Angular&nbsp;1 template features with the equivalent
template syntax in Angular&nbsp;2.</p>
<table width="100%"><colgroup><col width="50%"><col width="50%"></colgroup><tbody><tr><th>Angular&nbsp;1</th><th>Angular&nbsp;2</th></tr><tr style="vertical-align:top"><td><h3 id="bindings-interpolation">Bindings/Interpolation</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
<div class="md-ripple-container"></div></button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="typ">Your</span><span class="pln"> favorite hero </span><span class="kwd">is</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{{</span><span class="pln">vm</span><span class="pun">.</span><span class="pln">favoriteHero</span><span class="pun">}}</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, an expression in curly braces denotes one-way binding.
This binds the value of the element to a property in the controller
associated with this template.</p>
<p>When using the <code>controller as</code> syntax,
the binding is prefixed with the controller alias (<code>vm</code>) because we
have to be specific about the source of the binding.</p>
</td><td><h3 id="bindings-interpolation">Bindings/Interpolation</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="pln">Your favorite hero is: {{favoriteHero}}</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, a template expression in curly braces still denotes one-way binding.
This binds the value of the element to a property of the component.
The context of the binding is implied and is always the
associated component, so it needs no reference variable.</p>
<p>For more information see <a href="../guide/template-syntax.html#interpolation">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="filters">Filters</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
<div class="md-ripple-container"></div></button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.title | uppercase}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>To filter output in our templates in Angular&nbsp;1, we use the pipe character (|) and one or more filters.</p>
<p>In this example, we filter the <code>title</code> property to uppercase.</p>
</td><td><h3 id="pipes">Pipes</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
<div class="md-ripple-container"></div></button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.title | uppercase}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we use similar syntax with the pipe (|) character to filter output, but now we call them <strong>pipes</strong>.
Many (but not all) of the built-in filters from Angular&nbsp;1 are
built-in pipes in Angular&nbsp;2.</p>
<p>See the heading <a href="#Pipes">Filters / Pipes</a> below for more information.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="local-variables">Local variables</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"movie in vm.movies"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.title}}</span><span class="tag">&lt;/td&gt;</span><span class="pln">
</span><span class="tag">&lt;/tr&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Here, <code>movie</code> is a user-defined local variable.</p>
</td><td><h3 id="input-variables">Input variables</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> *</span><span class="atn">ngFor</span><span class="pun">=</span><span class="atv">"let movie of movies"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.title}}</span><span class="tag">&lt;/td&gt;</span><span class="pln">
</span><span class="tag">&lt;/tr&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we have true template input variables that are explicitly defined using the <code>let</code> keyword.</p>
<p>For more information see <a href="../guide/template-syntax.html#ngForMicrosyntax">ngFor micro-syntax</a>.</p>
</td></tr></tbody></table><p><a href="#top">Back to top</a></p>
<div class="l-main-section"></div><h2 id="template-directives">Template Directives</h2>
<p>Angular&nbsp;1 provides over seventy built-in directives for use in our templates.
Many of them are no longer needed in Angular&nbsp;2 because of its more capable and expressive binding system.
The following are some of the key Angular&nbsp;1 built-in directives and the equivalent feature in Angular&nbsp;2.</p>
<table width="100%"><colgroup><col width="50%"><col width="50%"></colgroup><tbody><tr><th>Angular&nbsp;1</th><th>Angular&nbsp;2</th></tr><tr style="vertical-align:top"><td><h3 id="ng-app">ng-app</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;body</span><span class="pln"> </span><span class="atn">ng-app</span><span class="pun">=</span><span class="atv">"movieHunter"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The application startup process is called <strong>bootstrapping</strong>.</p>
<p>Although we can bootstrap an Angular&nbsp;1 app in code,
many applications bootstrap declaratively with the <code>ng-app</code> directive,
giving it the name of the application's module (<code>movieHunter</code>).</p>
</td><td><h3 id="bootstrapping">Bootstrapping</h3>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> bootstrap </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'@angular/platform-browser-dynamic'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">AppComponent</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./app.component'</span><span class="pun">;</span><span class="pln">

bootstrap</span><span class="pun">(</span><span class="typ">AppComponent</span><span class="pun">);</span></code></pre></ng-transclude></div></copy-container></code-example><p>Angular&nbsp;2 does not have a bootstrap directive.
We always launch the app in code by explicitly calling a bootstrap function
and passing it the name of the application's module (<code>AppComponent</code>).</p>
<p>For more information see <a href="../quickstart.html">Quick Start</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-class">ng-class</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-class</span><span class="pun">=</span><span class="atv">"{active: isActive}"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-class</span><span class="pun">=</span><span class="atv">"{active: isActive,
                   shazam: isImportant}"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-class</code> directive includes/excludes CSS classes
based on an expression. That expression is often a key-value control object with each
key of the object defined as a CSS class name, and each value defined as a template expression
that evaluates to a Boolean value.</p>
<p>In the first example, the <code>active</code> class is applied to the element if <code>isActive</code> is true.</p>
<p>We can specify multiple classes as shown in the second example.</p>
</td><td><h3 id="ngclass">ngClass</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div</span><span class="pln"> [</span><span class="atn">ngClass</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"{active: isActive}"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="tag">&lt;div</span><span class="pln"> [</span><span class="atn">ngClass</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"{active: isActive,
                 shazam: isImportant}"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="tag">&lt;div</span><span class="pln"> [</span><span class="atn">class</span><span class="pln">.</span><span class="atn">active</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"isActive"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, the <code>ngClass</code> directive works similarly.
It includes/excludes CSS classes based on an expression.</p>
<p>In the first example, the <code>active</code> class is applied to the element if <code>isActive</code> is true.</p>
<p>We can specify multiple classes as shown in the second example.</p>
<p>Angular&nbsp;2 also has <strong>class binding</strong>, which is a good way to add or remove a single class
as shown in the third example.</p>
<p>For more information see <a href="../guide/template-syntax.html#other-bindings">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-click">ng-click</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"vm.toggleImage()"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="tag">&lt;button</span><span class="pln"> </span><span class="atn">ng-click</span><span class="pun">=</span><span class="atv">"vm.toggleImage($event)"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-click</code> directive allows us to specify custom behavior when an element is clicked.</p>
<p>In the first example, when the button is clicked, the <code>toggleImage()</code> method in the controller referenced by the <code>vm</code> <code>controller as</code> alias is executed.</p>
<p>The second example demonstrates passing in the <code>$event</code> object, which provides details about the event
to the controller.</p>
</td><td><h3 id="bind-to-the-click-event">bind to the <code>click</code> event</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;button</span><span class="pln"> (</span><span class="atn">click</span><span class="pln">)</span><span class="pun">=</span><span class="atv">"toggleImage()"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="tag">&lt;button</span><span class="pln"> (</span><span class="atn">click</span><span class="pln">)</span><span class="pun">=</span><span class="atv">"toggleImage($event)"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The Angular&nbsp;1 event-based directives do not exist in Angular&nbsp;2.
Rather, we define one-way binding from the template view to the component using <strong>event binding</strong>.</p>
<p>For event binding, we define the name of the target event within parenthesis and
specify a template statement in quotes to the right of the equals. Angular&nbsp;2 then
sets up an event handler for the target event. When the event is raised, the handler
executes the template statement.</p>
<p>In the first example, when the button is clicked, the <code>toggleImage()</code> method in the associated component is executed.</p>
<p>The second example demonstrates passing in the <code>$event</code> object, which provides details about the event
to the component.</p>
<p>For a list of DOM events, see: <a href="https://developer.mozilla.org/en-US/docs/Web/Events">https://developer.mozilla.org/en-US/docs/Web/Events</a>.</p>
<p>For more information see <a href="../guide/template-syntax.html#event-binding">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-controller">ng-controller</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-controller</span><span class="pun">=</span><span class="atv">"MovieListCtrl as vm"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-controller</code> directive attaches a controller to the view.
Using the <code>ng-controller</code> (or defining the controller as part of the routing) ties the
view to the controller code associated with that view.</p>
</td><td><h3 id="component-decorator">Component decorator</h3>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="lit">@Component</span><span class="pun">({</span><span class="pln">
  selector</span><span class="pun">:</span><span class="pln"> </span><span class="str">'movie-list'</span><span class="pun">,</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'app/movie-list.component.html'</span><span class="pun">,</span><span class="pln">
  styleUrls</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'app/movie-list.component.css'</span><span class="pun">],</span><span class="pln">
  pipes</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="typ">StringSafeDatePipe</span><span class="pun">]</span><span class="pln">
</span><span class="pun">})</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, the template no longer specifies its associated controller.
Rather, the component specifies its associated template as part of the component class decorator.</p>
<p>For more information see <a href="../guide/architecture.html#component">Architecture Overview</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-hide">ng-hide</h3>
<p>In Angular&nbsp;1, the <code>ng-hide</code> directive shows or hides the associated HTML element based on
an expression. See <a href="#ng-show">ng-show</a> for more information.</p>
</td><td><h3 id="bind-to-the-hidden-property">bind to the <code>hidden</code> property</h3>
<p>In Angular&nbsp;2, we use property binding; there is no built-in <em>hide</em> directive.
See <a href="#ng-show">ng-show</a> for more information.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-href">ng-href</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">ng-href</span><span class="pun">=</span><span class="atv">"angularDocsUrl"</span><span class="tag">&gt;</span><span class="pln">Angular Docs</span><span class="tag">&lt;/a&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The <code>ng-href</code> directive allows Angular&nbsp;1 to preprocess the <code>href</code> property so it
can replace the binding expression with the appropriate URL before the browser
fetches from that URL.</p>
<p>In Angular&nbsp;1, the <code>ng-href</code> is often used to activate a route as part of navigation.</p>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;a</span><span class="pln"> </span><span class="atn">ng-href</span><span class="pun">=</span><span class="atv">"#movies"</span><span class="tag">&gt;</span><span class="pln">Movies</span><span class="tag">&lt;/a&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Routing is handled differently in Angular&nbsp;2.</p>
</td><td><h3 id="bind-to-the-href-property">bind to the <code>href</code> property</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;a</span><span class="pln"> [</span><span class="atn">href</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"angularDocsUrl"</span><span class="tag">&gt;</span><span class="pln">Angular Docs</span><span class="tag">&lt;/a&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we use property binding; there is no built-in <em>href</em> directive.
We place the element's <code>href</code> property in square brackets and set it to a quoted template expression.</p>
<p>For more information on property binding see <a href="../guide/template-syntax.html#property-binding">Template Syntax</a>.</p>
<p>In Angular&nbsp;2, <code>href</code> is no longer used for routing. Routing uses <code>routerLink</code> as shown in the third example.</p>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;a</span><span class="pln"> [</span><span class="atn">routerLink</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"['/movies']"</span><span class="tag">&gt;</span><span class="pln">Movies</span><span class="tag">&lt;/a&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>For more information on routing see <a href="../guide/router.html#router-link">Routing &amp; Navigation</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-if">ng-if</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;table</span><span class="pln"> </span><span class="atn">ng-if</span><span class="pun">=</span><span class="atv">"movies.length"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-if</code> directive removes or recreates a portion of the DOM
based on an expression. If the expression is false, the element is removed from the DOM.</p>
<p>In this example, the <code>table</code> element is removed from the DOM unless the <code>movies</code> array has a length greater than zero.</p>
</td><td><h3 id="-ngif">*ngIf</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;table</span><span class="pln"> *</span><span class="atn">ngIf</span><span class="pun">=</span><span class="atv">"movies.length"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The <code>*ngIf</code> directive in Angular&nbsp;2 works the same as the <code>ng-if</code> directive in Angular&nbsp;1,
it removes or recreates a portion of the DOM based on an expression.</p>
<p>In this example, the <code>table</code> element is removed from the DOM unless the <code>movies</code> array has a length.</p>
<p>The (*) before <code>ngIf</code> is required in this example.
For more information see <a href="../guide/structural-directives.html">Structural Directives</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-model">ng-model</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">ng-model</span><span class="pun">=</span><span class="atv">"vm.favoriteHero"</span><span class="tag">/&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-model</code> directive binds a form control to a property in the controller associated with the template.
This provides <strong>two-way binding</strong> whereby any changes made to the value in the view is synchronized with the model and
any changes to the model are synchronized with the value in the view.</p>
</td><td><h3 id="ngmodel">ngModel</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;input</span><span class="pln"> [(</span><span class="atn">ngModel</span><span class="pln">)]</span><span class="pun">=</span><span class="atv">"favoriteHero"</span><span class="pln"> </span><span class="tag">/&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, <strong>two-way binding</strong> is denoted with [()], descriptively referred to as a "banana in a box".
This syntax is a short-cut for defining both property binding (from the component to the view)
and event binding (from the view to the component), thereby giving us two-way binding.</p>
<p>For more information on two-way binding with ngModel see <a href="../guide/template-syntax.html#ngModel">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-repeat">ng-repeat</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"movie in vm.movies"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-repeat</code> directive repeats the associated DOM element
for each item from the specified collection.</p>
<p>In this example, the table row (<code>tr</code>) element is repeated for each movie object in the collection of movies.</p>
</td><td><h3 id="-ngfor">*ngFor</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> *</span><span class="atn">ngFor</span><span class="pun">=</span><span class="atv">"let movie of movies"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The <code>*ngFor</code> directive in Angular&nbsp;2 is similar to the <code>ng-repeat</code> directive in Angular&nbsp;1.
It repeats the associated DOM element for each item from the specified collection.
More accurately, it turns the defined element (<code>tr</code> in this example) and its contents into a template and
uses that template to instantiate a view for each item in the list.</p>
<p>Notice the other syntax differences:
The (*) before <code>ngFor</code> is required;
the <code>let</code> keyword identifies <code>movie</code> as an input variable;
the list preposition is <code>of</code>, not <code>in</code>.</p>
<p>For more information see <a href="../guide/structural-directives.html">Structural Directives</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-show">ng-show</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;h3</span><span class="pln"> </span><span class="atn">ng-show</span><span class="pun">=</span><span class="atv">"vm.favoriteHero"</span><span class="tag">&gt;</span><span class="pln">
  Your favorite hero is: {{vm.favoriteHero}}
</span><span class="tag">&lt;/h3&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-show</code> directive shows or hides the associated DOM element based on
an expression.</p>
<p>In this example, the <code>div</code> element is shown if the <code>favoriteHero</code> variable is truthy.</p>
</td><td><h3 id="bind-to-the-hidden-property">bind to the <code>hidden</code> property</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;h3</span><span class="pln"> [</span><span class="atn">hidden</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"!favoriteHero"</span><span class="tag">&gt;</span><span class="pln">
  Your favorite hero is: {{favoriteHero}}
</span><span class="tag">&lt;/h3&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we use property binding; there is no built-in <em>show</em> directive.
For hiding and showing elements, we bind to the HTML <code>hidden</code> property.</p>
<p>To conditionally display an element, place the element's <code>hidden</code> property in square brackets and
set it to a quoted template expression that evaluates to the <em>opposite</em> of <em>show</em>.</p>
<p>In this example, the <code>div</code> element is hidden if the <code>favoriteHero</code> variable is not truthy.</p>
<p>For more information on property binding see <a href="../guide/template-syntax.html#property-binding">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-src">ng-src</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;img</span><span class="pln"> </span><span class="atn">ng-src</span><span class="pun">=</span><span class="atv">"{{movie.imageurl}}"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The <code>ng-src</code> directive allows Angular&nbsp;1 to preprocess the <code>src</code> property so it
can replace the binding expression with the appropriate URL before the browser
fetches from that URL.</p>
</td><td><h3 id="bind-to-the-src-property">bind to the <code>src</code> property</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;img</span><span class="pln"> [</span><span class="atn">src</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"movie.imageurl"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we use property binding; there is no built-in <em>src</em> directive.
We place the <code>src</code> property in square brackets and set it to a quoted template expression.</p>
<p>For more information on property binding see <a href="../guide/template-syntax.html#property-binding">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-style">ng-style</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-style</span><span class="pun">=</span><span class="atv">"{color: colorPreference}"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-style</code> directive sets a CSS style on an HTML element
based on an expression. That expression is often a key-value control object with each
key of the object defined as a CSS style name, and each value defined as an expression
that evaluates to a value appropriate for the style.</p>
<p>In the example, the <code>color</code> style is set to the current value of the <code>colorPreference</code> variable.</p>
</td><td><h3 id="ngstyle">ngStyle</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div</span><span class="pln"> [</span><span class="atn">ngStyle</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"{color: colorPreference}"</span><span class="tag">&gt;</span><span class="pln">
</span><span class="tag">&lt;div</span><span class="pln"> [</span><span class="atn">style</span><span class="pln">.</span><span class="atn">color</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"colorPreference"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, the <code>ngStyle</code> directive works similarly. It sets a CSS style on an HTML element based on an expression.</p>
<p>In the first example, the <code>color</code> style is set to the current value of the <code>colorPreference</code> variable.</p>
<p>Angular&nbsp;2 also has <strong>style binding</strong>, which is good way to set a single style. This is shown in the second example.</p>
<p>For more information on style binding see <a href="../guide/template-syntax.html#style-binding">Template Syntax</a>.</p>
<p>For more information on the ngStyle directive see <a href="../guide/template-syntax.html#ngStyle">Template Syntax</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="ng-switch">ng-switch</h3>
<code-example format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-switch</span><span class="pun">=</span><span class="atv">"vm.favoriteHero &amp;&amp;
                vm.checkMovieHero(vm.favoriteHero)"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-switch-when</span><span class="pun">=</span><span class="atv">"true"</span><span class="tag">&gt;</span><span class="pln">
      Excellent choice!
    </span><span class="tag">&lt;/div&gt;</span><span class="pln">
    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-switch-when</span><span class="pun">=</span><span class="atv">"false"</span><span class="tag">&gt;</span><span class="pln">
      No movie, sorry!
    </span><span class="tag">&lt;/div&gt;</span><span class="pln">
    </span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">ng-switch-default</span><span class="tag">&gt;</span><span class="pln">
      Please enter your favorite hero.
    </span><span class="tag">&lt;/div&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, the <code>ng-switch</code> directive swaps the contents of
an element by selecting one of the templates based on the current value of an expression.</p>
<p>In this example, if <code>favoriteHero</code> is not set, the template displays "Please enter ...".
If the <code>favoriteHero</code> is set, it checks the movie hero by calling a controller method.
If that method returns <code>true</code>, the template displays "Excellent choice!".
If that methods returns <code>false</code>, the template displays "No movie, sorry!".</p>
</td><td><h3 id="ngswitch">ngSwitch</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;span</span><span class="pln"> [</span><span class="atn">ngSwitch</span><span class="pln">]</span><span class="pun">=</span><span class="atv">"favoriteHero &amp;&amp;
               checkMovieHero(favoriteHero)"</span><span class="tag">&gt;</span><span class="pln">
  </span><span class="tag">&lt;p</span><span class="pln"> *</span><span class="atn">ngSwitchCase</span><span class="pun">=</span><span class="atv">"true"</span><span class="tag">&gt;</span><span class="pln">
    Excellent choice!
  </span><span class="tag">&lt;/p&gt;</span><span class="pln">
  </span><span class="tag">&lt;p</span><span class="pln"> *</span><span class="atn">ngSwitchCase</span><span class="pun">=</span><span class="atv">"false"</span><span class="tag">&gt;</span><span class="pln">
    No movie, sorry!
  </span><span class="tag">&lt;/p&gt;</span><span class="pln">
  </span><span class="tag">&lt;p</span><span class="pln"> *</span><span class="atn">ngSwitchDefault</span><span class="tag">&gt;</span><span class="pln">
    Please enter your favorite hero.
  </span><span class="tag">&lt;/p&gt;</span><span class="pln">
</span><span class="tag">&lt;/span&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, the <code>ngSwitch</code> directive works similarly.
It displays an element whose <code>*ngSwitchCase</code> matches the current <code>ngSwitch</code> expression value.</p>
<p>In this example, if <code>favoriteHero</code> is not set, the <code>ngSwitch</code> value is <code>null</code>
and we see the <code>*ngSwitchDefault</code> paragraph, "Please enter ...".
If the <code>favoriteHero</code> is set, it checks the movie hero by calling a component method.
If that method returns <code>true</code>, we see "Excellent choice!".
If that methods returns <code>false</code>, we see "No movie, sorry!".</p>
<p>The (*) before <code>ngSwitchCase</code> and <code>ngSwitchDefault</code> is required in this example.</p>
<p>For more information on the ngSwitch directive see <a href="../guide/template-syntax.html#ngSwitch">Template Syntax</a>.</p>
</td></tr></tbody></table><p><a href="#top">Back to top</a></p>
<a id="filters-pipes"></a><div class="l-main-section"></div><h2 id="filters-pipes">Filters / Pipes</h2>
<p>Angular&nbsp;2 <strong>pipes</strong> provide formatting and transformation for data in our template, similar to Angular&nbsp;1 <strong>filters</strong>.
Many of the built-in filters in Angular&nbsp;1 have corresponding pipes in Angular&nbsp;2.
For more information on pipes see <a href="../guide/pipes.html">Pipes</a>.</p>
<table width="100%"><colgroup><col width="50%"><col width="50%"></colgroup><tbody><tr><th>Angular&nbsp;1</th><th>Angular&nbsp;2</th></tr><tr style="vertical-align:top"><td><h3 id="currency">currency</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.price | currency}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Formats a number as a currency.</p>
</td><td><h3 id="currency">currency</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.price | currency:'USD':true}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The Angular&nbsp;2 <code>currency</code> pipe is similar although some of the parameters have changed.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="date">date</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.releaseDate  | date}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Formats a date to a string based on the requested format.</p>
</td><td><h3 id="date">date</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.releaseDate | date}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The Angular&nbsp;2 <code>date</code> pipe is similar. See <a href="#string-dates">note</a> about string date values.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="filter">filter</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"movie in movieList | filter: {title:listFilter}"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Selects a subset of items from the defined collection based on the filter criteria.</p>
</td><td><h3 id="none">none</h3>
<p>There is no comparable pipe in Angular&nbsp;2 for performance reasons.
Filtering should be coded in the component.
Consider building a custom pipe if the same filtering code
will be reused in several templates.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="json">json</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;pre&gt;</span><span class="pln">{{movie | json}}</span><span class="tag">&lt;/pre&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Converts a JavaScript object into a JSON string. This is useful for debugging.</p>
</td><td><h3 id="json">json</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;pre&gt;</span><span class="pln">{{movie | json}}</span><span class="tag">&lt;/pre&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The Angular&nbsp;2 <code>json</code> pipe does the same thing.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="limitto">limitTo</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"movie in movieList | limitTo:2:0"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Selects up to the first parameter (2) number of items from the collection
starting (optionally) at the beginning index (0).</p>
</td><td><h3 id="slice">slice</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> *</span><span class="atn">ngFor</span><span class="pun">=</span><span class="atv">"let movie of movies | slice:0:2"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The <code>SlicePipe</code> does the same thing but the <em>order of the parameters is reversed</em> in keeping
with the JavaScript <code>Slice</code> method.
The first parameter is the starting index; the second is the limit.
As in Angular 1, performance may improve if we code this operation within the component instead.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="lowercase">lowercase</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;div&gt;</span><span class="pln">{{movie.title | lowercase}}</span><span class="tag">&lt;/div&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Converts the string to lowercase.</p>
</td><td><h3 id="lowercase">lowercase</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.title | lowercase}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The Angular&nbsp;2 <code>lowercase</code> pipe does the same thing.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="number">number</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.starRating  | number}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Formats a number as text.</p>
</td><td><h3 id="number">number</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.starRating | number}}</span><span class="tag">&lt;/td&gt;</span><span class="pln">
</span><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.starRating | number:'1.1-2'}}</span><span class="tag">&lt;/td&gt;</span><span class="pln">
</span><span class="tag">&lt;td&gt;</span><span class="pln">{{movie.approvalRating | percent: '1.0-2'}}</span><span class="tag">&lt;/td&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>The Angular&nbsp;2 <code>number</code> pipe is similar.
It provides more functionality when defining
the decimal places as shown in the second example above.</p>
<p>Angular 2 also has a <code>percent</code> pipe which formats a number as a local percentage
as shown in the third example.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="orderby">orderBy</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;tr</span><span class="pln"> </span><span class="atn">ng-repeat</span><span class="pun">=</span><span class="atv">"movie in movieList | orderBy : 'title'"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Orders the collection as specified by the expression.
In this example, the movieList is ordered by the movie title.</p>
</td><td><h3 id="none">none</h3>
<p>There is no comparable pipe in Angular&nbsp;2 for performance reasons.
Ordering/sorting the results should be coded in the component.
Consider building a custom pipe if the same ordering/sorting code
will be reused in several templates.</p>
</td></tr></tbody></table><p><a href="#top">Back to top</a></p>
<a id="controllers-components"></a><div class="l-main-section"></div><h2 id="controllers-components">Controllers / Components</h2>
<p>In Angular&nbsp;1, we write the code that provides the model and the methods for the view in a <strong>controller</strong>.
In Angular&nbsp;2, we build a <strong>component</strong>.</p>
<p>Because much of our Angular&nbsp;1 code is in JavaScript, JavaScript code is shown in the Angular&nbsp;1 column.
The Angular&nbsp;2 code is shown using TypeScript.</p>
<table width="100%"><colgroup><col width="50%"><col width="50%"></colgroup><tbody><tr><th>Angular&nbsp;1</th><th>Angular&nbsp;2</th></tr><tr style="vertical-align:top"><td><h3 id="iife">IIFE</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">
</span><span class="pun">}());</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, we often defined an immediately invoked function expression (or IIFE) around our controller code.
This kept our controller code out of the global namespace.</p>
</td><td><h3 id="none">none</h3>
<p>We don't need to worry about this in Angular&nbsp;2 because we use ES 2015 modules
and modules handle the namespacing for us.</p>
<p>For more information on modules see <a href="../guide/architecture.html#module">Architecture Overview</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="angular-modules">Angular modules</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="pln">angular</span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">"movieHunter"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">[</span><span class="str">"ngRoute"</span><span class="pun">]);</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, we define an Angular module, which keeps track of our
controllers, services, and other code. The second argument defines the list
of other modules that this module depends upon.</p>
</td><td><h3 id="import">import</h3>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'@angular/core'</span><span class="pun">;</span></code></pre></ng-transclude></div></copy-container></code-example><p>Angular&nbsp;2 does not have its own module system. Instead we use ES 2015 modules.
ES 2015 modules are file based, so each code file is its own module.</p>
<p>We <code>import</code> what we need from the module files.</p>
<p>For more information on modules see <a href="../guide/architecture.html#module">Architecture Overview</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="controller-registration">Controller registration</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="pln">angular
  </span><span class="pun">.</span><span class="kwd">module</span><span class="pun">(</span><span class="str">"movieHunter"</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">.</span><span class="pln">controller</span><span class="pun">(</span><span class="str">"MovieListCtrl"</span><span class="pun">,</span><span class="pln">
              </span><span class="pun">[</span><span class="str">"movieService"</span><span class="pun">,</span><span class="pln">
               </span><span class="typ">MovieListCtrl</span><span class="pun">]);</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, we have code in each controller that looks up an appropriate Angular module
and registers the controller with that module.</p>
<p>The first argument is the controller name. The second argument defines the string names of
all dependencies injected into this controller, and a reference to the controller function.</p>
</td><td><h3 id="component-decorator">Component Decorator</h3>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="lit">@Component</span><span class="pun">({</span><span class="pln">
  selector</span><span class="pun">:</span><span class="pln"> </span><span class="str">'movie-list'</span><span class="pun">,</span><span class="pln">
  templateUrl</span><span class="pun">:</span><span class="pln"> </span><span class="str">'app/movie-list.component.html'</span><span class="pun">,</span><span class="pln">
  styleUrls</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'app/movie-list.component.css'</span><span class="pun">],</span><span class="pln">
  pipes</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="typ">StringSafeDatePipe</span><span class="pun">]</span><span class="pln">
</span><span class="pun">})</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we add a decorator to the component class to provide any required metadata.
The Component decorator declares that the class is a component and provides metadata about
that component, such as its selector (or tag) and its template.</p>
<p>This is how we associate a template with code, which is defined in the component class.</p>
<p>For more information on components see <a href="../guide/architecture.html#component">Architecture Overview</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="controller-function">Controller function</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="kwd">function</span><span class="pln"> </span><span class="typ">MovieListCtrl</span><span class="pun">(</span><span class="pln">movieService</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="pun">}</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, we write the code for the model and methods in a controller function.</p>
</td><td><h3 id="component-class">Component class</h3>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">MovieListComponent</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="pun">}</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we create a component class.</p>
<p>NOTE: If you are using TypeScript with Angular&nbsp;1 then the only difference here is
that the component class must be exported using the <code>export</code> keyword.</p>
<p>For more information on components see <a href="../guide/architecture.html#component">Architecture Overview</a>.</p>
</td></tr><tr style="vertical-align:top"><td><h3 id="dependency-injection">Dependency injection</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="typ">MovieListCtrl</span><span class="pun">.</span><span class="pln">$inject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">'MovieService'</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> </span><span class="typ">MovieListCtrl</span><span class="pun">(</span><span class="pln">movieService</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="pun">}</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, we pass in any dependencies as controller function arguments.
In this example, we inject a <code>MovieService</code>.</p>
<p>We also guard against minification problems by telling Angular explicitly
that it should inject an instance of the <code>MovieService</code> in the first parameter.</p>
</td><td><h3 id="dependency-injection">Dependency injection</h3>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="pln">constructor</span><span class="pun">(</span><span class="pln">movieService</span><span class="pun">:</span><span class="pln"> </span><span class="typ">MovieService</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="pun">}</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we pass in dependencies as arguments to the component class constructor.
In this example, we inject a <code>MovieService</code>.
The first parameter's TypeScript type tells Angular what to inject even after minification.</p>
<p>For more information on dependency injection see <a href="../guide/architecture.html#dependency-injection">Architecture Overview</a>.</p>
</td></tr></tbody></table><p><a href="#top">Back to top</a></p>
<a id="style-sheets"></a><div class="l-main-section"></div><h2 id="style-sheets">Style Sheets</h2>
<p>Style sheets give our application a nice look.
In Angular&nbsp;1, we specify the style sheets for our entire application.
As the application grows over time, the styles for the many parts of the application
are merged, which can cause unexpected results.
In Angular&nbsp;2, we can still define style sheets for our entire application. But now we can
also encapculate a style sheet within a specific component.</p>
<table width="100%"><colgroup><col width="50%"><col width="50%"></colgroup><tbody><tr><th>Angular&nbsp;1</th><th>Angular&nbsp;2</th></tr><tr style="vertical-align:top"><td><h3 id="link-tag">Link tag</h3>
<code-example><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"styles.css"</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="tag">/&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;1, we use a <code>link</code> tag in the head section of our <code>index.html</code> file
to define the styles for our application.</p>
</td><td><h3 id="link-tag">Link tag</h3>
<code-example language="html" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-html ng-scope prettyprinted"><code ng-non-bindable=""><span class="tag">&lt;link</span><span class="pln"> </span><span class="atn">rel</span><span class="pun">=</span><span class="atv">"stylesheet"</span><span class="pln"> </span><span class="atn">href</span><span class="pun">=</span><span class="atv">"styles.css"</span><span class="tag">&gt;</span></code></pre></ng-transclude></div></copy-container></code-example><p>In Angular&nbsp;2, we can continue to use the link tag to define the styles for our application in the <code>index.html</code> file.
But we can now also encapsulate styles for our components.</p>
<h3 id="styleurls">StyleUrls</h3>
<p>In Angular&nbsp;2, we can use the <code>styles</code> or <code>styleUrls</code> property of the <code>@Component</code> metadata to define
a style sheet for a particular component.</p>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="pln">styleUrls</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'app/movie-list.component.css'</span><span class="pun">],</span></code></pre></ng-transclude></div></copy-container></code-example><p>This allows us to set appropriate styles for individual components that won’t leak into
other parts of the application.</p>
</td></tr></tbody></table><p><a href="#top">Back to top</a></p>
<a id="string-dates"></a><div class="l-main-section"></div><h2 id="appendix-string-dates">Appendix: String dates</h2>
<p>Currently the Angular&nbsp;2 <code>date</code> pipe does not process string dates such as
"2015-12-19T00:00:00".</p>
<p>As a work around, subclass the Angular <code>DatePipe</code> with a version that can convert strings
and substitute that pipe in the HTML:</p>
<div class="example-title">date.pipe.ts</div><code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="lit">@Pipe</span><span class="pun">({</span><span class="pln">name</span><span class="pun">:</span><span class="pln"> </span><span class="str">'date'</span><span class="pun">,</span><span class="pln"> pure</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">})</span><span class="pln">
</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">StringSafeDatePipe</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">DatePipe</span><span class="pln"> </span><span class="kwd">implements</span><span class="pln"> </span><span class="typ">PipeTransform</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
 transform</span><span class="pun">(</span><span class="pln">value</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">,</span><span class="pln"> format</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">string</span><span class="pun">):</span><span class="pln"> </span><span class="kwd">string</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   value </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">typeof</span><span class="pln"> value </span><span class="pun">===</span><span class="pln"> </span><span class="str">'string'</span><span class="pln"> </span><span class="pun">?</span><span class="pln">
           </span><span class="typ">Date</span><span class="pun">.</span><span class="pln">parse</span><span class="pun">(</span><span class="pln">value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> value</span><span class="pun">;</span><span class="pln">
   </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">super</span><span class="pun">.</span><span class="pln">transform</span><span class="pun">(</span><span class="pln">value</span><span class="pun">,</span><span class="pln"> format</span><span class="pun">);</span><span class="pln">
 </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre></ng-transclude></div></copy-container></code-example><p>Then import and declare that pipe in the <code>@Component</code> metadata <code>pipes</code> array:</p>
<code-example language="ts" format=""><copy-container><div class="copy-container-template"><copy-button class="copy-button"><button class="md-icon-button md-button md-ink-ripple" type="button" ng-transclude="" aria-label="Copy to Clipboard">
  <md-icon md-font-icon="icon-content-copy" alt="Copy to Clipboard" class="ng-scope ng-isolate-scope md-font icon-content-copy material-icons" aria-hidden="true"></md-icon>
  
</button></copy-button><ng-transclude><pre class="prettyprint  lang-ts ng-scope prettyprinted"><code ng-non-bindable=""><span class="pln">pipes</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="typ">StringSafeDatePipe</span><span class="pun">]</span></code></pre></ng-transclude></div></copy-container></code-example><p><a href="#top">Back to top</a></p></div></div>
