import React from "react";
import Mine from "../../../images/mine.jpg";
import Todo from "../../../images/todo.png";
import C from "../../../images/C.jpg";
import Book from "../../../images/bookhouse.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 mb-32">
          <div className="my-auto space-y-4 ">
            <h1 className="text-4xl font-bold font-serif text-center text-secondary mt-16 lg:mt-0 ">
              Jubayer Ahmmod Shuvo
            </h1>
            <h2 className="font-serif text-xl text-center ">
              Email: jubayerahmmod@gmail.com
            </h2>
            <h2 className="font-serif text-xl text-center">
              Phone: +8801625752618
            </h2>
          </div>
          <div className="">
            <div class="avatar">
              <div class="w-full mask mask-hexagon mt-20">
                <img className=" " src={Mine} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-extrabold font-serif text-3xl text-secondary">
            Educational Background
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 my-32">
            <div className=" lg:mx-auto  text-xl space-y-3 font-bold font-serif px-6 lg:px-0">
              <h1>Department: Computer Science and Engineering</h1>
              <h1> Daffodil International University</h1>
              <h1>CGPA: 3.55</h1>
              <h1>Year: Jan 2018 - Dec 2021</h1>
            </div>
            <div className=" lg:mx-auto  text-xl space-y-3 font-bold font-serif px-6 lg:px-0">
              <h1>Background: Science </h1>
              <h1> Brahmanbari Govt. College</h1>
              <h1>GPA: 4.86</h1>
              <h1>Year: 2014 - 2016</h1>
            </div>
          </div>
        </div>
        <div className="p-16 mb-20">
          <h1 className="font-bold text-center font-serif text-secondary mb-12 text-3xl">
            Programming & Skills
          </h1>
          <p className="mb-6  text-lg">
            <span className="text-xl font-serif font-bold ">Expertise: </span>
            JavaScript(ES6), React.js, React Router, SPA, Firebase, HTML5, CSS3,
            Bootstrap 5, Tailwind, Rest API, MongoDB.
          </p>
          <p className="mb-6  text-lg">
            <span className="text-xl font-serif font-bold ">Comfortable: </span>
            Node.js, Express.js, Python , Android(JAVA), C, DaisyUI, MYSQL,
            Linux, Netlify, Heroku, Stripe.js.
          </p>

          <p className="mb-6  text-lg">
            <span className="text-xl font-serif font-bold ">Familiar: </span>
            Redux, Next.js, Nest.js, Django, AWS, GCP, Blockchain Technology.
          </p>
          <p className="mb-6 text-lg">
            <span className="text-xl font-serif font-bold ">
              Tools & Software:{" "}
            </span>
            VS Code, Android Studio, Chrome Dev Tools, PyCharm, Atom, GitHub,
            Bitbucket, Stack Overflow.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-center font-serif text-secondary mb-12 text-3xl">
            Projects
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 my-20   ">
            <div className="">
              <div class="card w-full bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={Todo} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <p className="text-3xl text-white">Todo App</p>
                  <div class="card-actions justify-end">
                    <a
                      className="btn btn-primary"
                      href="https://todo-app-c8f85.web.app/"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl image-full">
              <figure>
                <img src={C} alt="Shoes" />
              </figure>
              <div class="card-body">
                <p className="text-3xl text-white">Portfolio Website</p>
                <div class="card-actions justify-end">
                  <a
                    className="btn btn-primary"
                    href="https://jubayerahmmodshuvo.github.io/portfolioproject/"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl image-full">
              <figure>
                <img src={Book} alt="Shoes" />
              </figure>
              <div class="card-body">
                <p className="text-3xl text-white">Book WareHouse</p>
                <div class="card-actions justify-end">
                  <a
                    className="btn btn-primary"
                    href="https://book-house-f63f7.web.app/"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
