import React, { Component } from 'react'
import Tab from './Tab';
import Test from './test';
import SentenceTab from './SentenceTab';
import TabChallenge from './TabChallenge'
import State from './Stat';
function Dashbord() {
    return(
        <div className='container'>
            <Tab/>
            <SentenceTab/>
            <TabChallenge/>
            <State/>
        </div>
    );
}
export default Dashbord;