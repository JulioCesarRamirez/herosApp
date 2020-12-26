import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col">
      <div
        className="card ms-3 animate__animated animate__fadeIn"
        style={{ maxWidth: 540 }}
      >
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img-top"
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="tittle">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`./hero/${id}`}>Learn more...</Link>
        </div>
      </div>
    </div>
  );
};
