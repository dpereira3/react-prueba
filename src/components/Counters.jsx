import React, { Component } from 'react';
import Counter2 from './Counter2';

class Counters extends Component {
    state = {
        counters:[
            {id:1, value:3},
            {id:2, value:0},
            {id:3, value:6},
            {id:4, value:3},
        ]
    }


    handleDelete = (Id) => {
        //console.log('delete', Id);
        const NewCounters = this.state.counters.filter(c => c.id !== Id);
        this.setState({ counters: NewCounters });
    }

    render() {
        return(
            <div>
                { this.state.counters.map(counters => 
                <Counter2 
                    key={counters.id} 
                    onDelete={this.handleDelete}
                    value={counters.value} 
                    CountId={counters.id} >
                    <h3>Contador {counters.id} </h3>
                </Counter2>
                    ) }
            </div>
        )
    }
}
export default Counters