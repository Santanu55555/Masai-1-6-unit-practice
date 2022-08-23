import styled from "styled-components";


export const List = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  justify-content: space-evenly;
`;
export const Listcontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  gap: 20px;
  // flex-wrap:wrap;
  margin-left:25%;
 
 
`;
export const CoverImage = styled.img`
  width: 250px;
  height: 200px;
`;
export const CoverName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const Ingred = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: red;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 12px;
`;
export const SeeMore = styled(Ingred)`
  color: black;
`;
