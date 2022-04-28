import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [singleService, setSingleService] = useState({});
  
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=> res.json())
        .then(data => setSingleService(data))
    },[serviceId])
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetail;