import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../constants/data";
import styled from "@emotion/styled";
const StyleTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
const StyleButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ed;
  color: #fff;
`;

const StyledLink=styled(Link)`
text-decoration:none;
color:inherit;
`
const Categories = () => {


  const [searchParams]=useSearchParams();
  const category =searchParams.get('category');


  return (
    <>
      <StyledLink to={`/create?category=${category || ''}`} >
        <StyleButton variant="contained">Add New Blog</StyleButton>
      </StyledLink>
      <StyleTable>
        <TableHead>
          <TableRow>
            <TableCell>
             <u><b><StyledLink to="/" style={{color:"black"}}>Categories</StyledLink></b></u>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map(category => (
            <TableRow key={category.id}>
              <TableCell>
                <StyledLink to={`/?category=${category.type}`}>
                {category.type}
                </StyledLink>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyleTable>
    </>
  );
};
export default Categories;
