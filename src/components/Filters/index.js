import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

class CheckboxesTags extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {checked: false , tags: []}
    //     this.onTagsChanged = this.onTagsChanged.bind(this);
    // }
    

    render() {
        const {filter} = this.props;
        return (
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={array[filter]}
              disableCloseOnSelect
              getOptionLabel={option => option.title}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </React.Fragment>
              )
        }
              style={{ width: 210, marginBottom: 30 }}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Фильтр"
                  placeholder=""
                  fullWidth
                />
              )}
            />
          );
    }
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const array = [ 
    [
        { title: 'Математика' },
        { title: 'История' },
        { title: 'Программирование'},
], 
[
    { title: '1' },
    { title: '2' },
    { title: '3'},
], 
[
    { title: 'Бакалавр' },
    { title: 'Магистр' },
    { title: 'Аспирант'},
], [
    { title: 'ФИНФ' },
    { title: 'ФФК' },
    { title: 'РФФ'},
]
  ]
const course = [
    { title: '1' },
    { title: '2' },
    { title: '3'},
  ];

  const degree = [
    { title: 'Бакалавр' },
    { title: 'Магистр' },
    { title: 'Аспирант'},
  ];

  const faculty = [
    { title: 'ФИНФ' },
    { title: 'ФФК' },
    { title: 'РФФ'},
  ];
export default CheckboxesTags;