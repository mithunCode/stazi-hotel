import {
  ClearOutlined,
  EnvironmentOutlined,
  FullscreenOutlined,
  HeartOutlined,
  HomeOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
/* eslint-disable react/prop-types */
const Card = ({ name, price }) => {
  const getImage = () => {
    let img = Math.trunc(Math.random(1, 300) * 100);
    return `https://picsum.photos/id/` + img + `/400/300`;
  };
  return (
    <div>
      <div className="h-[440px] w-[350px] bg-gray-100 rounded-lg">
        <div className="p-1 relative">
          <img src={getImage()} alt="Hotel Image" className="rounded-lg" />
          <div className="flex justify-center items-center">
            <div className="absolute top-3 left-2 bg-white text-xs rounded-xl p-2 font-palanquin text-blue-500 ">
              For Rent
            </div>
            <div className="absolute top-4 right-3 bg-white rounded-full p-1 h-6 w-6 text-xs flex items-center justify-center text-blue-500">
              <HeartOutlined />
            </div>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex items-center justify-start p-1">
              <EnvironmentOutlined className="text-orange-500 text-[10px] px-1 inline" />
              <p className="text-[10px] font-Sans ">8858 Pecan St.</p>
            </div>
            <div>
              <p className="text-md font-palanquin font-bold leading-tight px-2 py-1">
                {name}
              </p>
              <div className="flex flex-row justify-around p-1">
                <div>
                  <HomeOutlined />
                  <p className="text-[10px] pt-1">3 Rooms</p>
                </div>
                <div>
                  <TabletOutlined />
                  <p className="text-[10px] pt-1">4 Bed</p>
                </div>
                <div>
                  <ClearOutlined />
                  <p className="text-[10px] pt-1">1 Bath</p>
                </div>
                <div>
                  <FullscreenOutlined />
                  <p className="text-[10px] pt-1">732 sft</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 px-1">
                <p className="text-xs font-semibold">
                  <span className="text-xl font-palanquin text-blue-500">
                    Rs. {price}
                  </span>
                  /month
                </p>
                <Button
                  type="primary"
                  className="border-blue-700 text-blue-700"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Card;
