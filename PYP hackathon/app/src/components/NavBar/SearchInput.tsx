import { Button, Form, FormControl } from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';

export const SearchInput = () => {
    return (
        <div className="col-lg-6">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search . . ."
                    className=" inputSearchForm"
                    aria-label="Search"
                />
                <Button variant="outline-light" className="navSearch"><SearchIcon /></Button>
            </Form>
        </div>

    )
}



