import React from "react";

export default class MenuItem extends React.Component {
    handleClick = () => {
        this.props.link ? console.log(this.props.title) : alert('This page is under construction yet.');
    }

    render() {
        return (
            this.props.link 
            ?
                <a
                    onClick={() => this.handleClick()} 
                    className="nav_link" 
                    target="_blank" 
                    rel="noreferrer"  
                    href={this.props.link}
                >
                {this.props.title}
                </a>
            :
                <div 
                    onClick={() => this.handleClick()} 
                    className="nav_link"
                >
                {this.props.title}
                </div>
        );
    }
}

