import Button from "elements/Button";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function GuestFavorite(props) {
  return (
    <section 
    className="container" 
    ref={props.refGuestFavorite}
    >
    <Fade direction="up"  >
      <h4 className="mb-3 font-weight-bold">Guest Favorite</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <Fade
            direction="up" delay={300 * index}
              key={`guestFavoite-${index}`}
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
              >
              
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                    />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block 
                    text-white"
                    href={`/properties/${item._id}`}
                    >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.cities}, {item.country}
                  </span>
                </div>
              </div>
              </Fade>
            
          )
        })}
      </div>
      </Fade>
    </section>
  );
}
