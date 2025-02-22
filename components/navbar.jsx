import NavbarLinks from "./navbarLinks";

const Navbar = () => {
  return (
    <div className="flex items-center py-2 pagemargin">
      <h1 className="shrink-0">LOGO</h1>
      <div className="grow flex justify-between items-center mx-auto text-black">
        <ul className="flex">
          <NavbarLinks href="/">Home</NavbarLinks>
          <NavbarLinks href="#">New Arrivals</NavbarLinks>
          <NavbarLinks href="#">Collections</NavbarLinks>
        </ul>

        <ul className="flex">
          <li className="p-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4004_1104)">
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14.0001 13.9996L11.1001 11.0996" stroke="#353535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4004_1104">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li className="p-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4004_1106)">
                <path
                  d="M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4004_1106">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li className="p-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4004_1108)">
                <path
                  d="M5.99992 14.6663C6.36811 14.6663 6.66658 14.3679 6.66658 13.9997C6.66658 13.6315 6.36811 13.333 5.99992 13.333C5.63173 13.333 5.33325 13.6315 5.33325 13.9997C5.33325 14.3679 5.63173 14.6663 5.99992 14.6663Z"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3334 14.6663C13.7016 14.6663 14.0001 14.3679 14.0001 13.9997C14.0001 13.6315 13.7016 13.333 13.3334 13.333C12.9652 13.333 12.6667 13.6315 12.6667 13.9997C12.6667 14.3679 12.9652 14.6663 13.3334 14.6663Z"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.666748 0.666992H3.33341L5.12008 9.59366C5.18104 9.90059 5.34802 10.1763 5.59178 10.3725C5.83554 10.5687 6.14055 10.673 6.45341 10.667H12.9334C13.2463 10.673 13.5513 10.5687 13.7951 10.3725C14.0388 10.1763 14.2058 9.90059 14.2667 9.59366L15.3334 4.00033H4.00008"
                  stroke="#353535"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_4004_1108">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
