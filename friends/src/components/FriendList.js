import React from 'react';
import { connect } from 'react-redux';
import { submitButton } from '../actions/index'
import FriendForm from './FriendForm'

const FriendList = props => {
    return (
        <>
        <h1>Title</h1>
        <button onClick = {props.submitButton}>{props.list}</button>
        {props.friends && props.friends.map(ef => <FriendForm key = {ef.name} e = {ef}/>)}
        
        
        </>
    )
}

const mapStatetoProps = state => {
    return {
        list: state.list,
        friends: state.friends
    }
}

export default connect(mapStatetoProps, {submitButton})(FriendList)