import React from 'react';
import {connect} from 'react-redux';
import './single-email.css';

export function SingleEmail(props) {
    console.log(props)
    return (
        <div className="single-email">
            <div className="single-email-headers">
                <h2 className="single-email-title">{props.title}</h2>
                <div className="single-email-from"><strong>From: </strong>{props.from}</div>
                <div className="single-email-to"><strong>To: </strong>{props.to}</div>
            </div>
            <div className="single-email-content">
                {props.content}
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    //Get the folderId
    const folderId = props.match.params.folderId; 
    //Get the emailId
    const emailId = props.match.params.emailId;
    //Get the email by accessing the folder by its folderId, then the email by its emailId
    const email = state[folderId].emails[emailId];
    console.log(email)
    //Return an object with the email, folderId, and emailId
    return Object.assign({}, email, {
        folderId,
        emailId
    });
}

export default connect(mapStateToProps)(SingleEmail);
