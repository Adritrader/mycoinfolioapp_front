import React from "react";
import '../styles/style.css';

function AnalysisDetail({ data }) {
  return (

    <div className="col-9 p-5 news-col">
    
      <section class="card border shadow mt-3">
                    <div class="row p-3">
                        <div class="col-3">
                            <img class="w-100 p-3" src="" alt="imagen-entrada-blog" />
                        </div>
                        <div class="col-8">
                            <h1 class="titulo-entrada">{data.title}</h1>
                            <p class="fecha-entrada"><i class="fas fa-calendar"></i>&nbsp;Published on: <span>{ data.date.date}</span><span class="mx-5 px-3 bg-primary"></span></p>
                            <p class="texto-entrada">{ data.content }</p>

                            <div class="row d-flex">
                              <div className="col-6">
                                <a href=""><button class="btn btn-dark mx-1">Reply</button></a>
                                <a href=""><button class="btn btn-info mx-1">Show</button></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
    
    </div>
    
  );
}

export default AnalysisDetail;