(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(4),c=a(3),i=a(5),u=a(0),l=a.n(u),o=a(7),d=a.n(o);a(14);function m(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={squares:Array(9).fill(null),isXNext:!0},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.isXNext?"X":"O",this.setState({squares:t,isXNext:!this.state.isXNext})}},{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"board"},l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"game"},l.a.createElement("p",{className:"game-name"},"Tic Tac Toe"),l.a.createElement("div",{className:"game-board"},l.a.createElement(h,null)))}}]),t}(l.a.Component);d.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.037c4746.chunk.js.map