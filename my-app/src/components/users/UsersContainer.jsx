import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow,setCurrentPage, toggleFollowingProgress, getUsers} from "../../redux/users-reducer";
import Users from './Users.jsx';
import Preloader from './../../common/preloader/preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class UsersContainer extends React.Component{
  

    componentDidMount() {
        
        this.props.getUsers (this.props.currentPage, this.props.pageSize);
       
}
        onPageChanged = (pageNumber)=>{

            this.props.getUsers (pageNumber, this.props.pageSize);
            
        }
            
    render() { 
        
        
            return <>
            {this.props.isFetching ? < Preloader /> : null }
            < Users TotalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize} 
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged} 
                            users={this.props.users}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            followingInProgress={this.props. followingInProgress}
                            /> 
                </>
        }
    
    }
   


let mapStateToProps = (state) => { 
    return { 
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isfetching: state.usersPage.isfetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}


export default compose (connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),withAuthRedirect)(UsersContainer)

