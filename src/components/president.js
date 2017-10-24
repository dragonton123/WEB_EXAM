import React from 'react';
import {promise} from 'react-promise';
import './btnstyle.css';
class President extends React.Component {

    render() {

        return (
            <div className="body1">
                <div className="show">
                    ชื่อ : {this.props.nm}  พรรค : {this.props.pp}  ปีที่ดำรงค์ตำแหน่ง : {this.props.tm}
                </div>
            </div>
        );
    }
}



export default President;
