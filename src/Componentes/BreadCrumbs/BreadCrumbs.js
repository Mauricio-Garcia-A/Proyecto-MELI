import React from 'react';
import './BreadCrumbs.scss';
//import { categoriasSelecionadas } from '../../SeviciosApi/funciones';

export default function BreadCrumbs(props){ 
    const categorias = [{id:"MLA1000",name:"Electrónica, Audio y Video"},{id:"MLA1002",name:"Televisores"}];

    /*const [ categorias, setCategorias ] = useState({})
    useEffect(() => {
        async function buscarCategorias () {
            let categories = await categoriasSelecionadas(props.id);
            setCategorias(categories)
        }
        buscarCategorias()
    }, [])*/


    let breadcrumbs =[];
    breadcrumbs = categorias.map((crumb) => {
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



