import { Component } from 'react';

class TOC extends Component {
  render() {
    const lists = [];
    let data = this.props.data;
    let i = 0;
    while(i < data.length) {
      lists.push(<li key={data[i].id}><a href={ '/content/'+ data[i].id } onClick={function(e) {
        e.preventDefault();

        console.log('key : ', key);

        // this.props.onChangePage({ key: key });
      }.bind(this).bind({ key: data[i].id })}>{ data[i].title }</a></li>);
      i++;
    }
    return (
      <nav>
        <ul>
          { lists }
        </ul>
      </nav>
    );
  }
}

export default TOC;