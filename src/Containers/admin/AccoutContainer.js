import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccoutUserItem from '../../Components/admin/AccoutUser/AccoutUserItem';
import { showApiAccout } from '../../Actions/admin/ActionAdmin';

class AccoutContainerUser extends Component {
    componentDidMount() {
        this.props.showAccout();
    }
    showAccoutDb(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((users, index) => {
                return <AccoutUserItem
                    key={index}
                    users={users}
                    index={index}
                />
            });
        }
        return result;
    }
    render() {
        // console.log(this.props);
        return (
            <div className="col-sm-9 mt-10">
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Manage Accout User</h3>
                <div className="panel panel-primary">
                    <div className="bg-primary text-white">
                        <h3 style={{ textAlign: "center", marginBottom: "0px" }}>
                            Lists Accout User
                            </h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Full Name</th>
                                    <th>Password</th>
                                    <th>Re-Password</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAccoutDb(this.props.AccoutAdmin)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        AccoutAdmin: state.AccoutReducerAdmin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showAccout: () => {
            dispatch(showApiAccout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccoutContainerUser)