"use strict";(self.webpackChunkbinarysearchvisapp=self.webpackChunkbinarysearchvisapp||[]).push([[4657],{765:function(t){function n(t){!function(t){var n=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var e=function t(n){return n?"string"===typeof n?n:"string"===typeof n.content?n.content:n.content.map(t).join(""):""},a=function n(a){for(var s=[],i=0;i<a.length;i++){var g=a[i],o=!1;if("string"!==typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===e(g.content[0].content[1])&&s.pop():"/>"===g.content[g.content.length-1].content||s.push({tagName:e(g.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===g.type&&"{"===g.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?s[s.length-1].openedBraces--:o=!0),(o||"string"===typeof g)&&s.length>0&&0===s[s.length-1].openedBraces){var p=e(g);i<a.length-1&&("string"===typeof a[i+1]||"plain-text"===a[i+1].type)&&(p+=e(a[i+1]),a.splice(i+1,1)),i>0&&("string"===typeof a[i-1]||"plain-text"===a[i-1].type)&&(p=e(a[i-1])+p,a.splice(i-1,1),i--),a[i]=new t.Token("plain-text",p,null,p)}g.content&&"string"!==typeof g.content&&n(g.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||a(t.tokens)}))}(t)}t.exports=n,n.displayName="jsx",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.200c15c1.chunk.js.map