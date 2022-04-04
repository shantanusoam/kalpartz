import Pulse from 'react-reveal/Pulse';
import Alternators from './ProductImage/Alternators.jpg';
import AirPreparation from './ProductImage/AirPreparation.png';
import React, { useEffect } from 'react';
import product from './product.json';

import { Card, Button } from './ProductCompanyElements';
// import igrid1 from '../../images/igrid1.png';

function Product() {
  const [pokemonName, setPokemonName] = React.useState('');

  React.useEffect(() => {});

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <h4 className=" self-center font-bold pt-16 lg:text-4xl text-2xl p-8">
        Products
      </h4>
      <div className="m-8 flex flex-row flex-wrap justify-center items-center ">
        {product.map((item, index) => (
          <Pulse key={item.id}>
            <div className="m-8">
              <Button>{item.name}</Button>
            </div>
          </Pulse>
        ))}
      </div>
      <div className="m-8 pt-2 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
        {product.map((item, index) => (
          <Pulse key={item.id}>
            <Card className="flex flex-col items-center bg-white w-80 p-8">
              <img src={Alternators} className=" w-32"></img>
              <h4 className="text-2xl">{item.name}</h4>
              <div className="flex">
                <div>
                  {/* {item.products} */}
                  {item.products.map((name) => {
                    return (
                      <div>
                        <h5 className="text-xl">{name}</h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </Pulse>
        ))}

        {/* <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-32"></img>
            <h4 className="text-2xl">Dedicated Surge Capacity</h4>
          </Card>
        </Pulse>

        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-40"></img>
            <h4 className="text-2xl">Power Only Capacity</h4>
          </Card>
        </Pulse>

        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-32"></img>
            <h4 className="text-2xl">Mobile Storage Solutions</h4>
          </Card>
        </Pulse>

        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-32"></img>
            <h4 className="text-2xl">Leased Trailer Solutions</h4>
          </Card>
        </Pulse>

        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-40"></img>
            <h4 className="text-2xl">Cross-Border Shipping</h4>
          </Card>
        </Pulse>

        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-40"></img>
            <h4 className="text-2xl">Refrigerated</h4>
          </Card>
        </Pulse> */}
      </div>
      {/* <div className="self-center pt-8 pb-10">
        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-32"></img>
            <h4 className="text-2xl">High-Value Cargo</h4>
          </Card>
        </Pulse>
      </div> */}
      {/* <h2 className=" self-center font-bold pt-4 lg:text-4xl text-2xl ">
        Canada Cross-Border Services
      </h2> */}

      {/* <div className=" pt-10 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className=" w-32"></img>
            <h4 className="text-2xl">Spot Truckload Capacity</h4>
          </Card>
        </Pulse>

        <Pulse>
          <Card className="flex flex-col items-center bg-white w-80 p-8">
            <img src={igrid1} className="w-32"></img>
            <h4 className="text-2xl">Dedicated Surge Capacity</h4>
          </Card>
        </Pulse>
      </div>
      <div className="self-center pt-8 pb-10"></div> */}
    </div>
  );
}

export default Product;
