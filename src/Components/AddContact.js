import React from "react";

class AddContact extends React.Component {
    state = {
        name: " ",
        phone: " ",
        email: " ",
        address: " ",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === " " || this.state.phone === " " || this.state.email === " " || this.state.address === " ")
        {
            alert("Fill in fields!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: " ", phone: " ", email: " ", address: " "});
    }
    render() {
        return (
            <div className="ui main">
                <h2>
                    Add Contact
                </h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="Field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" 
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="Field">
                        <label>Phone Number</label>
                        <input type="text" name="phone" placeholder="Phone Number" 
                        value={this.state.phone}
                        onChange={ (e) => this.setState({phone: e.target.value})} />
                    </div>
                    <div className="Field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" 
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})} />
                    </div>
                    <div className="Field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address" 
                        value={this.state.address}
                        onChange={ (e) => this.setState({address: e.target.value})}/>
                    </div>
                    <div></div>
                    <button className="ui button blue">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddContact;