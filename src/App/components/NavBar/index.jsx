import { SlMenu } from 'react-icons/sl';
import { IoClose } from 'react-icons/io5';
import P from 'prop-types';
import { useState } from 'react';

function NavBar({ children }) {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <nav
        className={`${display ? 'flex' : 'hidden'}   items-center justify-evenly flex-col
        min-h-screen bg-white w-full py-1.5 md:flex md:min-h-0 md:flex-row`}
      >
        {children}
      </nav>
      <div className={`flex fixed md:hidden mx-auto right-0 p-4`}>
        <div className="bg-[#0A1128] p-1.5 text-white text-medium cursor-pointer">
          {display ? (
            <IoClose
              onClick={() => {
                setDisplay(false);
              }}
            />
          ) : (
            <SlMenu
              onClick={() => {
                setDisplay(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
NavBar.propTypes = {
  children: P.node,
  display: P.bool,
};
export default NavBar;
