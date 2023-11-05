import React from 'react'
import useFooter from '../../useFooter';
import LinkButton from './../../../assets/LinkButton';

const LatestUpdates = () => {
    const {latestUpdates} = useFooter();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
        }}>
          {latestUpdates.map((latestUpdate, index) => (
            <LinkButton
              key={index}
              url={latestUpdate.to}
              text={latestUpdate.text}
            />
          ))}
        </div>
    )
}

export default LatestUpdates;