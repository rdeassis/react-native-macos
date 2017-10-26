---
id: using-a-listview
title: using-a-listview
---
<a id="content"></a><table width="100%"><tbody><tr><td><h1><a class="anchor" name="using-a-listview"></a>Using a ListView <a class="hash-link" href="docs/using-a-listview.html#using-a-listview">#</a></h1></td><td style="text-align:right;"><a target="_blank" href="https://github.com/facebook/react-native/blob/0.30-stable/docs/UsingAListView.md">Edit on GitHub</a></td></tr></tbody></table><div><p>The <code>ListView</code> component displays a vertically scrolling list of changing, but similarly structured, data.</p><p><code>ListView</code> works well for long lists of data, where the number of items might change over time. Unlike the more generic <a href="/react-native/docs/using-a-scrollview.html" target=""><code>ScrollView</code></a>, the <code>ListView</code> only renders elements that are currently showing on the screen, not all the elements at once.</p><p>The <code>ListView</code> component requires two props: <code>dataSource</code> and <code>renderRow</code>. <code>dataSource</code> is the source of information for the list. <code>renderRow</code> takes one item from the source and returns a formatted component to render.</p><p>This example creates a simple <code>ListView</code> of hardcoded data. It first initializes the <code>dataSource</code> that will be used to populate the <code>ListView</code>. Each item in the <code>dataSource</code> is then rendered as a <code>Text</code> component. Finally it renders the <code>ListView</code> and all <code>Text</code> components.</p><blockquote><p>A <code>rowHasChanged</code> function is required to use <code>ListView</code>. Here we just say a row has changed if the row we are on is not the same as the previous row.</p></blockquote><div class="prism language-javascript">import React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> from <span class="token string">'react'</span><span class="token punctuation">;</span>
import <span class="token punctuation">{</span> AppRegistry<span class="token punctuation">,</span> ListView<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> from <span class="token string">'react-native'</span><span class="token punctuation">;</span>

class <span class="token class-name">ListViewBasics</span> extends <span class="token class-name">Component</span> <span class="token punctuation">{</span>
 <span class="token comment" spellcheck="true"> // Initialize the hardcoded data
</span>  <span class="token function">constructor<span class="token punctuation">(</span></span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">super<span class="token punctuation">(</span></span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    const ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListView<span class="token punctuation">.</span>DataSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>rowHasChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span>r1<span class="token punctuation">,</span> r2<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> r1 <span class="token operator">!</span><span class="token operator">==</span> r2<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      dataSource<span class="token punctuation">:</span> ds<span class="token punctuation">.</span><span class="token function">cloneWithRows<span class="token punctuation">(</span></span><span class="token punctuation">[</span>
        <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token string">'Joel'</span><span class="token punctuation">,</span> <span class="token string">'James'</span><span class="token punctuation">,</span> <span class="token string">'Jimmy'</span><span class="token punctuation">,</span> <span class="token string">'Jackson'</span><span class="token punctuation">,</span> <span class="token string">'Jillian'</span><span class="token punctuation">,</span> <span class="token string">'Julie'</span><span class="token punctuation">,</span> <span class="token string">'Devin'</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render<span class="token punctuation">(</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      &lt;View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>paddingTop<span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        &lt;ListView
          dataSource<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dataSource<span class="token punctuation">}</span>
          renderRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>rowData<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> &lt;Text<span class="token operator">&gt;</span><span class="token punctuation">{</span>rowData<span class="token punctuation">}</span>&lt;<span class="token operator">/</span>Text<span class="token operator">&gt;</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      &lt;<span class="token operator">/</span>View<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment" spellcheck="true">
// App registration and rendering
</span>AppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent<span class="token punctuation">(</span></span><span class="token string">'AwesomeProject'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> ListViewBasics<span class="token punctuation">)</span><span class="token punctuation">;</span></div><p>One of the most common uses for a <code>ListView</code> is displaying data that you fetch from a server. To do that, you will need to <a href="/react-native/docs/network.html" target="">learn about networking in React Native</a>.</p></div><div class="docs-prevnext"><a class="docs-next" href="docs/network.html#content">Next →</a></div><div class="survey"><div class="survey-image"></div><p>Recently, we have been working hard to make the documentation better based on your feedback. Your responses to this yes/no style survey will help us gauge whether we moved in the right direction with the improvements. Thank you!</p><center><a class="button" href="https://www.facebook.com/survey?oid=516954245168428">Take Survey</a></center></div>