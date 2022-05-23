import React from 'react';

const Banner = () => {
  return (
    <>
      <div className=" mt-12">
        <h1 className="text-3xl font-semibold italic text-center text-emerald-700">
          Our Prorities <span className="text-red-500">!</span>
        </h1>
        <hr className="w-1/6 border-1 mx-auto mt-4 border-emerald-800" />
      </div>
      <div className="my-20">
        <div className="carousel w-full h-96 my-8">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://c1.wallpaperflare.com/preview/919/458/466/drill-machine-equipment-tool.jpg"
              className="w-full"
              alt="item1"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1575908393823-8e6ee16403d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRvb2x8ZW58MHx8MHx8&w=1000&q=80"
              className="w-full"
              alt="item2"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://thumbs.dreamstime.com/b/red-paint-roller-plastic-isolated-white-background-34638116.jpg"
              className="w-full"
              alt="item3"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1563784269116-ff83fae17724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwaWxsZWR8ZW58MHx8Mnx8&w=1000&q=80"
              className="w-full"
              alt="item4"
            />
          </div>
          <div id="item5" className="carousel-item w-full">
            <img
              src="https://media.sketchfab.com/models/94e767c3140140ea9abc373338a90a33/thumbnails/af7b93d97ee840c7ab9c129ddf1dcfc5/56897472db2d478da0c25cddcf393769.jpeg"
              className="w-full"
              alt="item5"
            />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1593616307659-07f02b400e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29sZGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="w-full"
              alt="item6"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
          <a href="#item5" className="btn btn-xs">
            5
          </a>
          <a href="#item6" className="btn btn-xs">
            6
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;