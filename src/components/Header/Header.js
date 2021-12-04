import React from "react";
import { ButtonSearch, Headerr, InputSearch, Logo, P, Search, Span } from "./HeaderStyles";
import { FaReddit } from "react-icons/fa";
import { HiOutlineSearch } from 'react-icons/hi';

function Header() {
  return (
    <Headerr data-testid="header">
      <Logo>
        <FaReddit  style={{fontSize:'2rem', marginRight:'8px'}}/>
        <P>
          Reddit<Span>Minimal</Span>
        </P>
      </Logo>

      <Search>

        <InputSearch
         type="text"
         placeholder="Search"
      
         aria-label="Search posts"
        />
        <ButtonSearch>
            <HiOutlineSearch style={{backgroundColor:'none', fontSize:'1.5rem'}}/>
            
        </ButtonSearch>

      </Search>
    </Headerr>
  );
}

export default Header;
