import { NavLink } from "react-router";

function Header(props) {

	return (
		<>
		<div className="w-full h-20 flex justify-between">
        {/* <!--logo heading--> */}
        <div className="w-1/4">
          <img src="/src/assets/logo.svg" className="h-25 w-25" alt="" />
        </div>
        <div className="w-2/4 flex flex-col justify-center items-center">
          <div
            className="w-[90%] h-[50%] rounded-xl bg-gray-200 flex justify-between p-4"
          >
            <div className="w-4/5 flex items-center">What are you looking for?</div>
            <div className="flex w-1/2 gap-5 justify-end">
              <div className="flex items-center justify-center gap-1">
                select category
                <svg
                  className="flex items-center justify-center mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <div
            className="flex items-center justify-center gap-2 border rounded-3xl p-1 border-gray-200 shadow-m"
          >
            <div className="bg-black p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </div>
            <div className="p-1">+977 9844208213</div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-20">
        {/* <!--navbar-->
        <!--main nav --> */}
        <div className="flex justify-start items-center gap-5 w-1/2">
          {/* <!--nav1--> */}

          <NavLink to="/"
            id="home"
            className="nav-link hover:border-b-green-700 border-b-green-700 h-full border-b-2 border-transparent p-5 py-6 transition-all duration-300 ease-in-out"
            >HOME</NavLink>
          
          <NavLink
            to="/shop"
            id="shop"
            className="flex gap-2 items-center nav-link hover:border-b-green-700 target:border-green-700 h-full border-b-2 border-transparent p-5 py-6 transition-all duration-300 ease-in-out"
            >SHOP
            <svg
              className="flex items-center justify-center mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              /></svg
          ></NavLink>
          <NavLink
            to="/news"
            id="news"
            className="nav-link hover:border-b-green-700 target:border-green-700 h-full border-b-2 border-transparent p-5 py-6 transition-all duration-300 ease-in-out"
            >NEWS</NavLink
          >
          <NavLink
            to="/about"
            id="about"
            className="nav-link hover:border-b-green-700 target:border-green-700 h-full border-b-2 border-transparent p-5 py-6 transition-all duration-300 ease-in-out"
            >ABOUT US</NavLink
          >
          <NavLink
            to="/contact"
            id="contact"
            className="nav-link hover:border-b-green-700 target:border-green-700 h-full border-b-2 border-transparent p-5 py-6 transition-all duration-300 ease-in-out"
            >CONTACT US</NavLink
          >
        </div>
        <div className="flex justify-end gap-10 items-center w-1/2">
          {/* <!-- nav2--> */}
          <a href="#">
            <div
              className="flex items-center gap-3 font-semibold text-gray-700 hover:text-yellow-400 transition-colors duration-100"
            >
              <svg
                className="ct-icon"
                aria-hidden="true"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="currentColor"
              >
                <path
                  d="M10.5,9h-6c-2.1,0-3.8,1.7-3.8,3.8v1.5c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.5c0-1.2,1-2.2,2.2-2.2h6c1.2,0,2.2,1,2.2,2.2v1.5c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.5C14.2,10.7,12.6,9,10.5,9zM7.5,7C9.4,7,11,5.4,11,3.5
	S9.4,0,7.5,0S4,1.6,4,3.5S5.6,7,7.5,7zM7.5,1.5c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S6.4,1.5,7.5,1.5z"
                ></path>
              </svg>
              LOGIN
            </div></a
          >
          <a href="#">
            <div
              className="flex items-center gap-3 font-semibold text-gray-700 hover:text-yellow-400 transition-colors duration-100"
            >
              <svg
                className="ct-icon"
                aria-hidden="true"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="currentColor"
              >
                <path
                  d="M7.5 6c-.1.5-.2 1-.3 1.4 0 .6-.1 1.3-.3 2-.2.7-.5 1.4-1 1.9-.5.6-1.3.9-2.2.9H0v-1.4h3.7c.6 0 .9-.2 1.2-.5.3-.3.5-.7.7-1.3.1-.5.2-1 .3-1.6v-.3c0-.5.1-1 .3-1.5.2-.7.5-1.4 1-1.9.5-.6 1.3-.9 2.2-.9h3l-1.6-1.6 1-1L15 3.5l-3.3 3.3-1-1 1.6-1.6h-3c-.6 0-.9.2-1.2.5-.2.3-.5.7-.6 1.3zM4.9 4.7c.2-.4.4-.9.7-1.3-.5-.4-1.1-.6-1.9-.6H0v1.4h3.7c.6 0 1 .2 1.2.5zm5.8 4.5 1.6 1.6h-3c-.6 0-.9-.2-1.2-.5-.2.4-.4.9-.6 1.3.5.4 1.1.6 1.8.6h3l-1.6 1.6 1 1 3.3-3.3-3.3-3.3-1 1z"
                ></path></svg
              >COMPARE
            </div></a
          >
          <a href="#">
            <div
              className="flex items-center gap-3 font-semibold text-gray-700 hover:text-yellow-400 transition-colors duration-100"
            >
              <svg
                className="ct-icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="currentColor"
              >
                <path
                  d="M7.5,13.9l-0.4-0.3c-0.2-0.2-4.6-3.5-5.8-4.8C0.4,7.7-0.1,6.4,0,5.1c0.1-1.2,0.7-2.2,1.6-3c0.9-0.8,2.3-1,3.6-0.8C6.1,1.5,6.9,2,7.5,2.6c0.6-0.6,1.4-1.1,2.4-1.3c1.3-0.2,2.6,0,3.5,0.8l0,0c0.9,0.7,1.5,1.8,1.6,3c0.1,1.3-0.3,2.6-1.3,3.7c-1.2,1.4-5.6,4.7-5.7,4.8L7.5,13.9z M4.2,2.7C3.6,2.7,3,2.9,2.5,3.3c-0.6,0.5-0.9,1.2-1,1.9C1.4,6.1,1.8,7,2.4,7.8c0.9,1,3.9,3.4,5.1,4.3c1.2-0.9,4.2-3.3,5.1-4.3c0.7-0.8,1-1.7,0.9-2.6c-0.1-0.8-0.4-1.4-1-1.9l0,0c-0.6-0.5-1.5-0.7-2.3-0.5C9.3,3,8.6,3.5,8.2,4.2L7.5,5.4L6.8,4.2C6.4,3.5,5.7,3,4.9,2.8C4.7,2.8,4.4,2.7,4.2,2.7z"
                ></path></svg
              >WISHLIST
            </div>
          </a>
          <a href="#"
            ><div
              className="flex items-center gap-3 font-semibold text-gray-700 hover:text-yellow-400 transition-colors duration-100"
            >
              <svg
                aria-hidden="true"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="currentColor"
              >
                <path
                  d="M14.1,1.6C14,0.7,13.3,0,12.4,0H2.7C1.7,0,1,0.7,0.9,1.6L0.1,13.1c0,0.5,0.1,1,0.5,1.3C0.9,14.8,1.3,15,1.8,15h11.4c0.5,0,0.9-0.2,1.3-0.6c0.3-0.4,0.5-0.8,0.5-1.3L14.1,1.6zM13.4,13.4c0,0-0.1,0.1-0.2,0.1H1.8c-0.1,0-0.2-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.2L2.4,1.7c0-0.1,0.1-0.2,0.2-0.2h9.7c0.1,0,0.2,0.1,0.2,0.2l0.8,11.5C13.4,13.3,13.4,13.4,13.4,13.4z M10,3.2C9.6,3.2,9.2,3.6,9.2,4v1.5c0,1-0.8,1.8-1.8,1.8S5.8,6.5,5.8,5.5V4c0-0.4-0.3-0.8-0.8-0.8S4.2,3.6,4.2,4v1.5c0,1.8,1.5,3.2,3.2,3.2s3.2-1.5,3.2-3.2V4C10.8,3.6,10.4,3.2,10,3.2z"
                ></path></svg
              >$0.00
            </div></a
          >
        </div>
      </div>
		</>
	);
}

export default Header;