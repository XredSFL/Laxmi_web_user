import React, { useState,useEffect } from 'react';

// helper
import Axios from '../../../helpers/axiosConfig'

// elements
import Heading from '../../elements/heading'
import Product from '../../elements/product/productHome'

const SomeProduct = ({t}) => {
    const [data,setData] = useState(null)

    useEffect(() => {
        Axios.get(`/home/products`)
        .then(response => {
            const {data,status} = response.data
            if(status){
                setData(data)
            }else{
                setData([])
            }
        })
        .catch(error => {
            setData([])
            return {
                status : false,
                message : error.message
            }
        })      
    },[data]);

    return(
        <div className="someProduct pt-5">
            <Heading title={t('Some Of Our Products')} />
            <div className="container-fluid">
                <div className="row">
                    {
                        data ? 
                        data.length ?
                        <>
                        {
                            data.map((data,index) => (
                                <Product key={index} t={t} data={data}/>
                            ))       
                        }
                        <div className="d-flex justify-content-center mt-5">
                            <button 
                                type="button" 
                                className="btn btn-primary btn-lg py-3">{t('SEE ALL PRODUCT')}</button>
                        </div>                         
                        </>
                        :
                        <p className="text-center">{t("common:There are no products yet")}</p> :
                        <p className="text-center">Loading</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SomeProduct ;