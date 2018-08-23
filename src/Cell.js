import React from 'react'

class Cell extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { mark: ""}

        this.markIt = this.markIt.bind(this)
    }

    render() {
        return <div className="cell" onClick = {this.markIt}>{this.state.mark}</div>
    }

    markIt() {
        console.log(`this.state.mark: ${this.state.mark}`)
        if (!!this.state.mark) {
            this.setState({ mark: "X"})
        }        
    }
}

export default Cell