import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import EmailList from './email-list';
import './email.css';

export default function Email() {
    return (
        <BrowserRouter>
            <div className="email">
                <Sidebar />
                <main>
                    <Switch>
                        {/* <SingleEmail folderId="inbox" emailId="1" />  */}
                        <Route exact path="/:folderId" component={EmailList} />
                        <Route exact path="/:folderId/:emailId" component={SingleEmail} />
                        <Redirect from="/" to="/inbox" />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}
