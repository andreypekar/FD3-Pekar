var MyList = React.createClass({

  displayName: 'MyList',

  propTypes: {
    strArr: React.PropTypes.string,
    patternText: React.PropTypes.string,
    isSortFlag: React.PropTypes.bool,
  },

  render: function() {

/*     function makeStr(arrStr, strPattern) {
      return function(flgSort) {
        var arrWP=arrStr.filter(el => { if( el.indexOf(strPattern) != -1 ) return true; });

        return (flgSort?arrWP.sort().join('\n'):arrWP.join('\n'));
      }
    };

    var fnGetStrFromArray = makeStr(this.props.strArr,this.props.patternText); */

    return React.DOM.textarea( {name:'List', id:'MyList', rows:10, readOnly:'true', value:this.props.strArr} );
  },
});
