import react, { Component } from 'react';

class Counter2 extends Component {
    state = {
        count: this.props.value,
        tags: ['hola', 'chau'],
    }
    styles = {
        fontSize: 30,
        padding: 5,
    }

    RenderTags() {
        if(this.state.tags.length === 0) return <p>The are no tags </p>;
        return <ul> {this.state.tags.map( tag => <li key={tag} >{tag}</li> )} </ul>
    }

    //constructor(){
    //    super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    //} para acceder al componente. y sus atributos.

    handleIncrement = () => {
        //console.log('Increment clicked', this);
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        //console.log('props', this.props);
        return (
            <react.Fragment>
                { this.props.children } @ { this.props.CountId }
                <span style={this.styles} className={this.GetClass()}> { this.Change() } </span>
                <button onClick={ () => {this.handleIncrement()}} 
                style={this.styles} className="btn btn-primary">Increment</button>
                <button onClick={ this.props.onDelete(this.props.CountId) } >Delete</button>
                { this.RenderTags() }
            </react.Fragment>
            
        )
    }

    GetClass(){
        let classes = "numero ";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    Change(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter2;