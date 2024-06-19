import TravelJulySemptemberCard from "./TravelJulySemptemberCard";
import { TravelJulySemptemberData } from "./TravelJulySemptemberData";

const TravelJulySemptember = () => {
  return (
    <>
      <TravelJulySemptemberCard
        img={TravelJulySemptemberData.img}
        date={TravelJulySemptemberData.date}
        countryTravel={TravelJulySemptemberData.countryTravel}
        text={TravelJulySemptemberData.text}
        locationImg={TravelJulySemptemberData.locationImg}
        location={TravelJulySemptemberData.location}
        comment={TravelJulySemptemberData.comment}
        number={TravelJulySemptemberData.number}
        commentImg={TravelJulySemptemberData.commentImg}
      />
    </>
  );
};
export default TravelJulySemptember;
