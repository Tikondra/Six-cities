import * as React from "react";
import {nanoid} from "nanoid";

interface Props {
  host: {
    avatar: string;
    name: string;
    isSuper: boolean;
  };
  description: [];
}

const getDescription = (description) => description.map((it) => {
  return <p key={nanoid()} className="property__text">{it}</p>;
});

const Host: React.FC<Props> = (props: Props) => {
  const {host: {name, isSuper, avatar}, description} = props;

  const isPro = isSuper ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` :
    `property__avatar-wrapper user__avatar-wrapper`;

  return <div className="property__host">
    <h2 className="property__host-title">Meet the host</h2>
    <div className="property__host-user user">
      <div className={isPro}>
        <img className="property__avatar user__avatar" src={avatar} width="74" height="74"
          alt={name} />
      </div>
      <span className="property__user-name">{name}</span>
    </div>
    <div className="property__description">
      {getDescription(description)}
    </div>
  </div>;
};

export default Host;
