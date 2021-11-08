var MyFilter = React.createClass({

  displayName: 'MyFilter',

  propTypes: {
    strArray: React.PropTypes.arrayOf(React.PropTypes.string),
  },

  getInitialState: function() {
    return { pattern:'',
      isSorting:false,
      resStr:this.props.strArray.join('\n'),
    };
  },

  processing: function() {
    var res = this.props.strArray;

    if (this.state.pattern != '') {
      res = res.filter(el => { if( el.indexOf(this.state.pattern) != -1 ) return true; });
    };

    if (this.state.isSorting) {
      this.setState( {resStr:(res.slice()).sort().join('\n')} );
    }
    else {
      this.setState( {resStr:res.join('\n')} );
    };
  },

  setPattern: function(EO) {
    console.log( 'сработала setPattern' );
    this.setState( {pattern:EO.target.value}, this.processing );
  },

  setSortFlag: function(EO) {
    console.log( 'сработала setSortFlag' );
    this.setState( {isSorting:EO.target.checked}, this.processing );
  },

  allReset: function() {
    console.log( 'сработала allReset' );
    this.setState( {pattern:'', isSorting:false}, this.processing );
  },

  render: function() {

    return React.DOM.div( {className:'MyFilter'},
      React.DOM.div( {className:'dTable'},
        React.DOM.div( {className:'dRow'},
          React.DOM.div( {className:'dCell'}, React.DOM.input({type:'checkbox', name:'SortCheck', checked:this.state.isSorting, onClick:this.setSortFlag}) ),
          React.DOM.div( {className:'dCell'}, React.DOM.input({type:'text', name:'TextInput', value:this.state.pattern, onChange:this.setPattern}) ),
          React.DOM.div( {className:'dCell'}, React.DOM.input({type:'button', name:'Reset', value:'Сброс', onClick:this.allReset}) ),
        ),
      ),
      React.DOM.div( {className:'dTable'},
        React.DOM.div( {className:'dRow', id:'uRow'},
          React.DOM.div( {className:'dCell', id:'uCell'},
            React.createElement(MyList,{strArr:this.state.resStr, patternText:this.state.pattern, isSortFlag:this.state.isSorting}),
          ),
        ),
      ),
    );
  },
});