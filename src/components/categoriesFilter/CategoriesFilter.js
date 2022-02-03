import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useHistory, useLocation } from "react-router-dom";
import { categoriesEnum } from '../../constants';
import queryString from "query-string";

export const CategoriesFilter = () => {
  const history = useHistory();
  const location = useLocation();

  const handleChangeMultiple = ({ target: { options: { selectedIndex } } }) => {
    const parsed = queryString.parse(location.search);

    delete parsed.page;
    parsed.category = categoriesEnum[selectedIndex];

    const stringified = queryString.stringify(parsed);

    history.push(`/products?${stringified}`);
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
          {categoriesEnum.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

