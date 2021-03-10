import React from 'react';

const Home: React.FC = (): React.ReactElement => {
  return (
    <div className="animated fadeIn">
      <div className="row">
        <div className="col p-2">
          <div className="card mb-3">
            <div className="card-header">Buttons</div>
            <div className="card-body">
              <button type="button" className="btn btn-primary mr-2">
                Primary
              </button>
              <button type="button" className="btn btn-secondary mr-2">
                Secondary
              </button>
              <button type="button" className="btn btn-success mr-2">
                Success
              </button>
              <button type="button" className="btn btn-danger mr-2">
                Danger
              </button>
              <button type="button" className="btn btn-warning mr-2">
                Warning
              </button>
              <button type="button" className="btn btn-info mr-2">
                Info
              </button>
              <button type="button" className="btn btn-light mr-2">
                Light
              </button>
              <button type="button" className="btn btn-dark mr-2">
                Dark
              </button>

              <button type="button" className="btn btn-link mr-2">
                Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
