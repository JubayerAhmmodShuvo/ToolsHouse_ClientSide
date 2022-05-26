import React from 'react';

const Upcoming = () => {
  return (
    <div className="my-32 ">
      <h1 className="text-4xl font-serif font-bold my-32 text-center text-secondary">
        Upcoming Services   </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-11 ">
        <div>
          <div class="card card-compact w-full h-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-72 object-cover object-center rounded-lg"
                src="https://c1.wallpaperflare.com/preview/733/509/92/chisel-tool-joinery-hand.jpg"
                alt="Chisel"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Chisel</h2>
              <p className="m-4 text-lg">
                Chisel, cutting tool with a sharpened edge at the end of a metal
                blade, used often by driving with a mallet or hammer in
                dressing, shaping, or working a solid material such as wood,
                stone, or metal.
              </p>

              <div class="card-actions justify-end  my-6">
                <div class="badge badge-secondary">comming soon</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card card-compact w-full h-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-72 object-cover object-center rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7D30Q_-Rja8KEbaPScC53BMIeNvR7YEuMyc9e9E_DGN2asbPfQd88YOozyVhZgbwdTY&usqp=CAU"
                alt="Sand Paper"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title ">Sand Paper</h2>
              <p className="m-4 text-lg">
                Sandpaper is produced in a range of grit sizes and is used to
                remove material from surfaces, either to make them smoother (for
                example, in painting and wood finishing).
              </p>
              <div class="card-actions justify-end my-6">
                <div class="badge badge-secondary">comming soon</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card card-compact w-full h-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-72 object-cover object-center rounded-lg"
                src="https://d29c95q8mcesvj.cloudfront.net/catalog/product/cache/415a4d13c7472ffdf4cf179f63aca8d6/x/s/xsr01z_15.jpg"
                alt="Electric Saw"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Electric Saw</h2>
              <p className="m-4 text-lg">
                A power saw is a portable mechanical machine used for both
                industrial and DIY projects. It is the type of power tool that
                comprises sturdy blades, chains, wire, set of teeth, etc. It is
                basically used for the work piece in large cuts.
              </p>
              <div class="card-actions justify-end my-6">
                <div class="badge badge-secondary">comming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;