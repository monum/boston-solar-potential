import React from "React"
import charts from "/Users/nnamdiojibe/boston-solar-potential/data/CalcSolarSavings.js"


export default function ChartInputs(){


    return(
    <div class="container">

      
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <span class="navbar-brand">Solar Savings Calculator</span>
          </div>
        </div> 
        
      </nav>

      <div id="drawing_tool" class="row">
        <div class="col-md-8">
          <div id="map"></div>
        </div>
        <div class="col-md-4">
          <h3>Roofs</h3>
          <h4 class="tip">Please draw your roofs on the map</h4>
          <div id="roof_faces" class="list-group">
          </div>
        </div>
      </div>

      <div id="visualizer" class="row">
        <div class="col-md-12">
          <h1>See your savings</h1>
          <hr/>
        </div>

        <div class="col-md-5">
          <p class="lead">Solar Panel: <span id="panel_name" class="pull-right"></span></p>
          <p class="lead">Number of Panels: <span id="number_of_panels" class="pull-right"></span></p>
          <p class="lead">System Size: <span id="system_size" class="pull-right"></span></p>
          <p class="lead">System Cost: <span id="system_cost" class="pull-right"></span></p>
          <p class="lead">Annual Energy Production: <span id="annual_production" class="pull-right"></span></p>
          <hr/>
          <p class="lead">Utility Rate
          <input type="number" step="0.01" class="form-control pull-right text-right utility-rate" id="utility_rate" value="" placeholder="$/kWh"/>
          </p>
          <p class="lead">Annual Energy Saving: <span id="annual_savings" class="pull-right"></span></p>
          <hr />
          <button id="back" class="btn btn-primary btn-block">Go back for another roof</button>
          </div>
        <div class="col-md-7">
          <div class="chart" id="monthly_energy_production"></div>
          <div class="chart" id="cash_flow"></div>
        </div>
      </div>

    </div> 

    );
}