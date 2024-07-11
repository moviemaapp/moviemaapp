import React from "react";
import { Link } from "react-router-dom";


const ProjetoCardNew = ({ project_slug, title }) => {
    return (
        <>
          <div className="col-lg-4" style={{ display: 'flex' }}>
        

          <Link to={`/moviemaapp/projeto/${project_slug}`} className="btn-get-project-card scrollto p-3" style={{ width: '100%' }}>{title}</Link>
        

          </div>
        </>
      );
}

export default ProjetoCardNew