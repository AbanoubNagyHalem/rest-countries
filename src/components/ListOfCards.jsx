import React from 'react';
import { Card } from 'react-bootstrap';

const ListOfCards = ({ mode, data, error }) => {
  if (error || !Array.isArray(data) || data.length === 0) {
    return (
      <div className={`no-data ${mode}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>No Data</h2>
      </div>
    );
  }

  return (
    <div className={`cards ${mode}`}>
      <div className="container">
        {data.map((country) => {
          return (
            <Card className='' style={{ width: '18rem', height: "24rem" }} key={country.cca3}>
              <Card.Img variant="top" src={country.flags.png} />
              <Card.Body className='ps-4'>
                <Card.Title>{country.name.common}</Card.Title>
                <div className='pt-3 pb-3'>
                  <Card.Text>
                    Population: <span>{country.population.toLocaleString()}</span>
                  </Card.Text>
                  <Card.Text>
                    Region: <span>{country.region}</span>
                  </Card.Text>
                  <Card.Text>
                    Capital: <span>{country.capital?.[0] || 'N/A'}</span>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ListOfCards;
