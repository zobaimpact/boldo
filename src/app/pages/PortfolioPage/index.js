import React from 'react';
import { Layout } from "../../components/Layout";
import PortfolioCard from '../../components/PortFolio/PortfolioCard';
import data from '../../../data';


const PortfolioPage = () => {
  return <Layout>
    <PortfolioCard portfolioData={data}/>
  </Layout>

};

export default PortfolioPage;