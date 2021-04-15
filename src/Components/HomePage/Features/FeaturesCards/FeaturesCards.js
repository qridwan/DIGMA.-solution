import React from "react";
import { CardGroup } from "react-bootstrap";
import FeaturesSingleCard from "./FeaturesSingleCard";
import webSearch from "../../../../Images/featuresImage/webSearch.png";
import keywordAnalytics from "../../../../Images/featuresImage/keywordAnalytics.png";
import designNdev from "../../../../Images/featuresImage/designNdev.png";

const featuringData = [
  {
    id: 1,
    icon: webSearch,
    title: "Web Research",
    description:
      "Share processes and data secure lona need to know basis Our team assured your web site safe.",
  },
  {
    id: 2,
    icon: keywordAnalytics,
    title: "Keyword Analytics",
    description:
      "Share processes and data secure lona need to know basis Our team assured your web site safe.",
  },
  {
    id: 3,
    icon: designNdev,
    title: "Design & Development",
    description:
      "Share processes and data secure lona need to know basis Our team assured your web site safe.",
  },
];

const FeaturesCards = () => {
  return (
<div>
    <h2 className="text-center mt-5">CORE FEATURES</h2>
<CardGroup  className="m-5">
      {featuringData.map((feature) => (
        <FeaturesSingleCard
          key={feature.id}
          feature={feature}
        ></FeaturesSingleCard>
      ))}
    </CardGroup>
</div>
  );
};

export default FeaturesCards;
