import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2</span>
                    <span className="featureMoneyRate negative">-11.4 <ArrowDownward/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2</span>
                    <span className="featureMoneyRate">+5.4 <ArrowUpward/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Estimate</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$5</span>
                    <span className="featureMoneyRate">+1.2 <ArrowUpward/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

        </div>
    );
}

export default FeaturedInfo;
