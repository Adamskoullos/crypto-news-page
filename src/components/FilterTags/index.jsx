import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FilterTags = ({ tags, filteredTags, setFilteredTags }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;
    // On autofill we get a stringified value.
    setFilteredTags(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      {tags && (
        <FormControl sx={{ width: "100%", mt: 2, mb: -2 }}>
          <InputLabel id="tags">Filter Tags</InputLabel>
          <Select
            className="filter-tags"
            sx={{ color: "darkGrey" }}
            labelId="tags"
            id="demo-multiple-checkbox"
            multiple
            value={filteredTags}
            onChange={handleChange}
            input={
              <OutlinedInput
                label="Filter Tags"
                sx={{ color: "rgba(152,152,152, 0)" }}
              />
            }
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                <Checkbox checked={filteredTags.indexOf(tag) > -1} />
                <ListItemText primary={tag} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default FilterTags;
