import React from 'react'
import LinkButton from './../../../assets/LinkButton';
import useFooter from '../../useFooter';

const QuickLinks = () => {
    const {quickLinks} = useFooter();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
        }}>
          {quickLinks.map((quickLink, index) => (
            <LinkButton
              key={index}
              url={quickLink.to}
              text={quickLink.text}
            />
          ))}
        </div>
    )
}

export default QuickLinks;