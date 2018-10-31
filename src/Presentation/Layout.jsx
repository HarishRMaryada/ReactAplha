import React, { Component } from 'react';


//material ui components

//components
import CardTemplate from './Card'
import TopNavBar from './TopNavBar'

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <TopNavBar></TopNavBar>
                </div>
                <div>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                    <CardTemplate></CardTemplate>
                 </div>   
                
                
                
            </div>
        );
    }
}

export default Layout;