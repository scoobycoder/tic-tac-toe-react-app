import React from 'react'

class Cell extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { mark: ""}

        // this.markIt = this.markIt.bind(this)
    }

    render() {
        return <div className="cell" onClick = {this.markIt}>{this.state.mark}</div>
    }

    // markIt() {
    //     this.setState({ mark: "X"})
    // }

    markIt = () => {
        this.setState({ mark: "X"})
    }
}

export default Cell