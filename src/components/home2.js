import React , { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {promise} from 'react-promise';
import President from './president'
import axios from'axios';


class Home2 extends Component{
    render(){
        let content
        content = this.props.president.resultpresident.map((presi_data,index) => {
            return (
                    <p key={index} >
                        <President nm={presi_data.nm} pp={presi_data.pp} tm={presi_data.tm}/>
                    </p>
                );
        });
        return(
            <div>

                    <button className="btn" onClick={()=>this.props.setData()}>Get data</button>

                    <button className="btn" onClick={()=>this.props.clearData()}>Clear</button>

                <h1>
                    {content}
                </h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        president: state.president,

    };
};
const mapDispatchToprops = (dispatch) =>{

    return{
        setData : () =>{
            dispatch({
                type: "FETCH_PRESIDENT",
                payload :new Promise((resolve,reject) => {
                    setTimeout(()=>{
                        resolve(axios.get('https://mysafeinfo.com/api/data?list=presidents&format=json')
                            .then(res => {
                                console.log(JSON.stringify(res.data.results));
                                return res.data })
                            .catch(err => { throw err; }));
                    },500);
                })
            });

        },
        clearData : () =>{
            dispatch({
                type: "FETCH_PRESIDENT",
                payload : []
            });

        }
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToprops)(Home2));
