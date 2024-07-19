import React, { useEffect } from 'react';

const WistiaEmbed = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/embed/medias/ujsoark3fi.jsonp";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="wistia_responsive_padding" >
      <div className="wistia_responsive_wrapper">
        <div className="wistia_embed wistia_async_ujsoark3fi seo=false videoFoam=true">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default WistiaEmbed;
