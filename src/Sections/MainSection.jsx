import { Button } from "antd";
import Card from "../Components/Card";
import { HourglassOutlined } from "@ant-design/icons";
import { useState } from "react";
import NavButton from "../Components/NavButton";

const MainSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  let cityArr = ["Mumbai", "NewYork", "Paris", "London"];
  let cities = {
    Mumbai: [
      {
        name: "Taj Hotel Mumbai",
        price: "30000",
      },
      {
        name: " JW Marriott Mumbai Sahar",
        price: "16000",
      },
      {
        name: "Sun-n-Sand Hotel, Mumbai",
        price: "14500",
      },
      {
        name: " Niranta Airport Transit Hotel & Lounge",
        price: "10000",
      },
      {
        name: "Lemon Tree Premier, Mumbai International Airport",
        price: "5000",
      },
      {
        name: "Taj Mahal Tower, Mumbai",
        price: "24000",
      },
      {
        name: "The Westin Mumbai Powai Lake",
        price: "12000",
      },
      {
        name: "The Lalit Mumbai",
        price: "8000",
      },
      {
        name: "Sofitel Mumbai BKC",
        price: "20000",
      },
      {
        name: "The Regale by Tunga",
        price: "7000",
      },
    ],
    NewYork: [
      {
        name: "The Wallace Hotel ",
        price: "34000",
      },
      {
        name: "Luma Hotel - Times Square",
        price: "31000",
      },
      {
        name: "NobelDen Hotel Manhattan New York",
        price: "  32000",
      },
      {
        name: "Chelsea Hotel",
        price: "36000",
      },
      {
        name: "Pendry Manhattan West",
        price: "27000",
      },
      {
        name: "The Wall Street Hotel of New York ",
        price: "47000",
      },
      {
        name: "Hudson Yards",
        price: "37000",
      },
      {
        name: "The WhiteBy Hotel",
        price: "74000",
      },
      {
        name: "The Artezan Hotel",
        price: "17000",
      },
    ],
    London: [
      {
        name: "The Park Grand London ",
        price: "8000",
      },
      {
        name: "Hampton by Hilton London City",
        price: "18000",
      },
      {
        name: "The Tower Hotel",
        price: " 18900",
      },
      {
        name: "The Clermont, Charing Cross",
        price: "36000",
      },
      {
        name: "Novotel London Canary Wharf",
        price: "27000",
      },
      {
        name: "Wilde Aparthotels By Staycity London - Paddington",
        price: "47000",
      },
      {
        name: "The Westminster London, Curio Collection by Hilton",
        price: "37000",
      },
      {
        name: "Hotel Indigo London - Kensington, An IHG Hotel",
        price: "74000",
      },
      {
        name: "Novotel London Excel Hotel",
        price: "17000",
      },
    ],
    Paris: [
      {
        name: "BLOOM HOUSE HOTEL & SPA ",
        price: "43000",
      },
      {
        name: " Holiday Inn Express Paris - Canal de la Villette, an IHG Hotel",
        price: "21000",
      },
      {
        name: "Hotel Mayfair Paris",
        price: " 28900",
      },
      {
        name: " Hotel Europe Saint Severins",
        price: "34500",
      },
      {
        name: "Novotel London Canary Wharf",
        price: "27000",
      },
      {
        name: " Hotel Le Mareuiln",
        price: "27600",
      },
      {
        name: "Hotel La Manufacture",
        price: "17000",
      },
      {
        name: "InterContinental Paris - Champs-Elysees Etoile, an IHG Hotel",
        price: "74000",
      },
      {
        name: "Citadines Tour Eiffel Paris",
        price: "76000",
      },
    ],
  };

  const getFromChild = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
      <div className="flex flex-row p-5 gap-10 justify-between">
        <div className="flex gap-10 ">
          {cityArr.map((city, i) => (
            <NavButton key={i} city={city} getFromChild={getFromChild} />
          ))}
        </div>

        <div>
          <Button type="primary " className="bg-blue-500 text-white ">
            View All
          </Button>
        </div>
      </div>
      {console.log(selectedCity)}
      {/* Mumbai HOtels */}
      {selectedCity == "Mumbai" || selectedCity == undefined ? (
        <div className="flex flex-row gap-10 flex-wrap bg-blue-200">
          {cities.Mumbai.map((hotel, i) => {
            while (i < 6) {
              return <Card key={i} name={hotel.name} price={hotel.price} />;
            }
          })}
          {showMore ? (
            <>
              {cities.Mumbai.reverse().map((hotel, i) => {
                while (i < 3) {
                  return <Card key={i} name={hotel.name} price={hotel.price} />;
                }
              })}
            </>
          ) : null}
        </div>
      ) : null}
      {/* NEWYORK HOTELS */}
      {selectedCity == "NewYork" ? (
        <div className="flex flex-row gap-10 flex-wrap bg-blue-200">
          {cities.NewYork.map((hotel, i) => {
            while (i < 6) {
              return <Card key={i} name={hotel.name} price={hotel.price} />;
            }
          })}
          {showMore ? (
            <>
              {cities.NewYork.reverse().map((hotel, i) => {
                while (i < 3) {
                  return <Card key={i} name={hotel.name} price={hotel.price} />;
                }
              })}
            </>
          ) : null}
        </div>
      ) : null}
      {/* Paris HOTELS */}
      {selectedCity == "Paris" ? (
        <div className="flex flex-row gap-10 flex-wrap bg-blue-200">
          {cities.Paris.map((hotel, i) => {
            while (i < 6) {
              return <Card key={i} name={hotel.name} price={hotel.price} />;
            }
          })}
          {showMore ? (
            <>
              {cities.Paris.reverse().map((hotel, i) => {
                while (i < 3) {
                  return <Card key={i} name={hotel.name} price={hotel.price} />;
                }
              })}
            </>
          ) : null}
        </div>
      ) : null}
      {/* London Hotel */}

      {selectedCity == "London" ? (
        <div className="flex flex-row gap-10 flex-wrap bg-blue-200">
          {cities.London.map((hotel, i) => {
            while (i < 6) {
              return <Card key={i} name={hotel.name} price={hotel.price} />;
            }
          })}
          {showMore ? (
            <>
              {cities.London.reverse().map((hotel, i) => {
                while (i < 3) {
                  return <Card key={i} name={hotel.name} price={hotel.price} />;
                }
              })}
            </>
          ) : null}
        </div>
      ) : null}
      <div className="flex justify-center items-center my-5">
        {!showMore ? (
          <Button
            type="primary"
            icon={<HourglassOutlined className="text-lg text-white " />}
            className="bg-blue-500 text-white font-palanquin font-bold h-10 w-48 flex justify-center items-center"
            onClick={() => setShowMore(true)}
          >
            Show More
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default MainSection;
