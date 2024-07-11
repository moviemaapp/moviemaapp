import React from "react";
import { Link } from "react-router-dom";


const ProjetoCardNew = ({ project_slug, title }) => {
    return (
        <>
          <div className="col-lg-3">
        

            <Link to={`/moviemaapp/projeto/${project_slug}`} class="btn-get-project-card scrollto">{title}</Link>
        

          </div>
        </>
      );
}

export default ProjetoCardNew