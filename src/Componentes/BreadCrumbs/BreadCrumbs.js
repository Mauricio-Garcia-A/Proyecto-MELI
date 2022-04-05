import React from 'react';
import './BreadCrumbs.scss';

export default function BreadCrumbs(props){ 
    let breadcrumbs =[];
    breadcrumbs = props.Categorias.map((crumb) => {
      return <li key={crumb.id}> {crumb.name}  </li>;
     });
  
  return (
    <>
        <ul className="breadcrumb">
            {breadcrumbs}
        </ul>
    </>
  );
};



