import React from 'react'
import LinkButton from './../../../assets/LinkButton';
import useFooter from '../../useFooter';

const RabbitHole = () => {
    const {rabbitHoles} = useFooter();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
        }}>
          {rabbitHoles.map((rabbitHole, index) => (
            <LinkButton
              key={index}
              url={rabbitHole.to}
              text={rabbitHole.text}
            />
          ))}
        </div>
    )
}

export default RabbitHole;