class Component {
  constructor(props){
    this.props = props;
  }
  render(){
    return 'test';
  }
}

console.log(123);

module.exports.Component = Component;
module.exports.test = 5;