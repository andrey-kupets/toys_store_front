import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHistory, useLocation } from "react-router-dom";
import { transformQuery } from "../../funtion-helpers";
import { constants } from '../../constants';

export const CategoriesFilter = () => {
  const history = useHistory();
  const searchParams = useLocation().search.replace('?', '');

  const handleChangeMultiple = ({ target: { options: { selectedIndex } } }) => {
    history.push(`/products?${transformQuery(searchParams, { category: constants.categoryList[selectedIndex], page: 1 })}`)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Категория
        </InputLabel>
        <Select sx={{ padding: '6px 0' }}
          multiple
          native
          onChange={handleChangeMultiple}
          label="Категория"
        >
          {constants.categoryList.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

