"use strict";(self.webpackChunkbinarysearchvisapp=self.webpackChunkbinarysearchvisapp||[]).push([[3846,3047],{4490:function(e,n,a){var t=a(595);function r(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=r,r.displayName="handlebars",r.aliases=[]},595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,r,s){if(a.language===t){var i=a.tokenStack=[];a.code=a.code.replace(r,(function(e){if("function"===typeof s&&!s(e))return e;for(var r,o=i.length;-1!==a.code.indexOf(r=n(t,o));)++o;return i[o]=e,r})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var r=0,s=Object.keys(a.tokenStack);!function i(o){for(var l=0;l<o.length&&!(r>=s.length);l++){var u=o[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=s[r],p=a.tokenStack[c],g="string"===typeof u?u:u.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++r;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,i([k])),m.push(b),h&&m.push.apply(m,i([h])),"string"===typeof u?o.splice.apply(o,[l,1].concat(m)):u.content=m}}else u.content&&i(u.content)}return o}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.e3d79898.chunk.js.map