import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import Charts from '../../components/charts/Charts';
import { userData } from '../../dummydata';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

const Home = () => {

const MONTHS = useMemo(
  () => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  []
);
const count1 = ()=>{
  setTimeout(() => {
  for (let i = 0; i < 12; i++) {
   
  }
}, 3000)
}



const [userStats, setUserStats] = useState([]);
const getStats = async () => {
  try {
    const res = await axios.get("/users/stats", {
      headers:{
        token:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjE2NWViMzE0ZjAzMmZjYTk4YzY1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODYwNTUxOCwiZXhwIjoxNjg5MDM3NTE4fQ.ahuvma7hzH5KJXCJ3uNvuMWvQrWWL_lgtTW-DiOmGps",
        // token:"Bearer "+JSON.parse(localStorage.getItem("user").accessToken),
        Authorization: 'IuQjMfNphKjYMQiYZbfBWLD248b7sECPzjFfalM8JDo2uqY9Cg4YyuTH'
      },
    });
    const statsList = res.data.sort(function (a, b) {
      return a._id - b._id;
    });
    statsList.map((item) =>
      setUserStats((prev)=>
        [...prev,{ name: MONTHS[item._id - 1], "New User": item.total, id: item._id - 1 }]
      )
    );
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  
  getStats();
  count1();
  console.log(userStats.name);
  
}, [MONTHS,count1()]);

    return (
        <div className='home'>
            <FeaturedInfo/>
            <Charts data={userStats} title="User Analytics" grid dataKey="New User"/>
            <div className='homeWidgets'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;
